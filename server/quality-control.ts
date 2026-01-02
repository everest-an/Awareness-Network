import { getDb } from "./db";
import {
  vectorReports,
  creatorReputations,
  vectorQualityChecks,
  latentVectors,
  reviews,
} from "../drizzle/schema";
import { eq, and, desc, sql } from "drizzle-orm";

/**
 * Create a vector quality report
 */
export async function createVectorReport(params: {
  vectorId: number;
  reporterId: number;
  reason: "spam" | "low_quality" | "misleading" | "copyright" | "inappropriate" | "other";
  description?: string;
}) {
  const db = await getDb();
  
  const [report] = await db.insert(vectorReports).values({
    vectorId: params.vectorId,
    reporterId: params.reporterId,
    reason: params.reason,
    description: params.description,
    status: "pending",
  });

  // Update creator reputation
  const vector = await db.query.latentVectors.findFirst({
    where: eq(latentVectors.id, params.vectorId),
  });

  if (vector) {
    await updateCreatorReputation(vector.creatorId);
  }

  return report;
}

/**
 * Get reports for a vector
 */
export async function getVectorReports(vectorId: number) {
  const db = await getDb();
  
  return await db.query.vectorReports.findMany({
    where: eq(vectorReports.vectorId, vectorId),
    orderBy: [desc(vectorReports.createdAt)],
    with: {
      reporter: {
        columns: {
          id: true,
          name: true,
        },
      },
    },
  });
}

/**
 * Get pending reports for admin review
 */
export async function getPendingReports(limit: number = 50) {
  const db = await getDb();
  
  return await db.query.vectorReports.findMany({
    where: eq(vectorReports.status, "pending"),
    orderBy: [desc(vectorReports.createdAt)],
    limit,
    with: {
      vector: {
        columns: {
          id: true,
          title: true,
          creatorId: true,
        },
      },
      reporter: {
        columns: {
          id: true,
          name: true,
        },
      },
    },
  });
}

/**
 * Resolve a report
 */
export async function resolveReport(params: {
  reportId: number;
  adminId: number;
  status: "resolved" | "dismissed";
  adminNotes?: string;
}) {
  const db = await getDb();
  
  await db.update(vectorReports)
    .set({
      status: params.status,
      resolvedBy: params.adminId,
      resolvedAt: new Date(),
      adminNotes: params.adminNotes,
    })
    .where(eq(vectorReports.id, params.reportId));

  // Update creator reputation
  const report = await db.query.vectorReports.findFirst({
    where: eq(vectorReports.id, params.reportId),
    with: {
      vector: true,
    },
  });

  if (report?.vector) {
    await updateCreatorReputation(report.vector.creatorId);
  }
}

/**
 * Perform automated quality check on a vector
 */
export async function performQualityCheck(params: {
  vectorId: number;
  checkType: "dimension_validation" | "format_validation" | "data_integrity" | "performance_test";
  expectedDimension?: number;
}) {
  const db = await getDb();
  
  const vector = await db.query.latentVectors.findFirst({
    where: eq(latentVectors.id, params.vectorId),
  });

  if (!vector) {
    throw new Error("Vector not found");
  }

  let status: "passed" | "failed" | "warning" = "passed";
  let score = 100;
  const details: any = {};

  // Dimension validation
  if (params.checkType === "dimension_validation" && params.expectedDimension) {
    if (vector.vectorDimension !== params.expectedDimension) {
      status = "failed";
      score = 0;
      details.error = `Expected dimension ${params.expectedDimension}, got ${vector.vectorDimension}`;
    } else {
      details.message = "Dimension matches expected value";
    }
  }

  // Format validation
  if (params.checkType === "format_validation") {
    if (!vector.vectorFileUrl) {
      status = "failed";
      score = 0;
      details.error = "No vector file URL";
    } else if (!vector.modelArchitecture) {
      status = "warning";
      score = 70;
      details.warning = "Missing model architecture information";
    } else {
      details.message = "Format validation passed";
    }
  }

  // Data integrity
  if (params.checkType === "data_integrity") {
    const hasMetadata = !!(vector.modelArchitecture && vector.vectorDimension);
    const hasPerformance = !!vector.performanceMetrics;
    
    if (!hasMetadata) {
      status = "failed";
      score = 30;
      details.error = "Missing critical metadata";
    } else if (!hasPerformance) {
      status = "warning";
      score = 80;
      details.warning = "Missing performance metrics";
    } else {
      details.message = "Data integrity check passed";
    }
  }

  await db.insert(vectorQualityChecks).values({
    vectorId: params.vectorId,
    checkType: params.checkType,
    status,
    score: score.toString(),
    details: JSON.stringify(details),
    checkedBy: null, // Automated check
  });

  return { status, score, details };
}

/**
 * Update creator reputation score
 */
export async function updateCreatorReputation(userId: number) {
  const db = await getDb();
  
  // Get creator's vectors
  const vectors = await db.query.latentVectors.findMany({
    where: eq(latentVectors.creatorId, userId),
  });

  // Get total reports
  const reportCounts = await db
    .select({
      total: sql<number>`count(*)`,
      resolved: sql<number>`sum(case when ${vectorReports.status} = 'resolved' then 1 else 0 end)`,
    })
    .from(vectorReports)
    .innerJoin(latentVectors, eq(vectorReports.vectorId, latentVectors.id))
    .where(eq(latentVectors.creatorId, userId));

  // Get average rating
  const ratingResult = await db
    .select({
      avgRating: sql<number>`avg(${reviews.rating})`,
    })
    .from(reviews)
    .innerJoin(latentVectors, eq(reviews.vectorId, latentVectors.id))
    .where(eq(latentVectors.creatorId, userId));

  const totalReports = reportCounts[0]?.total || 0;
  const resolvedReports = reportCounts[0]?.resolved || 0;
  const averageRating = ratingResult[0]?.avgRating || 0;

  // Calculate reputation score
  let reputationScore = 100;
  
  // Deduct points for unresolved reports
  const unresolvedReports = totalReports - resolvedReports;
  reputationScore -= unresolvedReports * 5; // -5 points per unresolved report
  
  // Add points for good ratings
  if (averageRating >= 4.5) {
    reputationScore += 10;
  } else if (averageRating >= 4.0) {
    reputationScore += 5;
  } else if (averageRating < 3.0) {
    reputationScore -= 10;
  }

  // Ensure score is between 0 and 100
  reputationScore = Math.max(0, Math.min(100, reputationScore));

  // Upsert reputation record
  const existing = await db.query.creatorReputations.findFirst({
    where: eq(creatorReputations.userId, userId),
  });

  if (existing) {
    await db.update(creatorReputations)
      .set({
        reputationScore: reputationScore.toString(),
        totalVectors: vectors.length,
        totalReports,
        resolvedReports,
        averageRating: averageRating.toString(),
        lastCalculatedAt: new Date(),
      })
      .where(eq(creatorReputations.userId, userId));
  } else {
    await db.insert(creatorReputations).values({
      userId,
      reputationScore: reputationScore.toString(),
      totalVectors: vectors.length,
      totalReports,
      resolvedReports,
      averageRating: averageRating.toString(),
    });
  }

  return reputationScore;
}

/**
 * Get creator reputation
 */
export async function getCreatorReputation(userId: number) {
  const db = await getDb();
  
  let reputation = await db.query.creatorReputations.findFirst({
    where: eq(creatorReputations.userId, userId),
  });

  // Calculate if not exists
  if (!reputation) {
    await updateCreatorReputation(userId);
    reputation = await db.query.creatorReputations.findFirst({
      where: eq(creatorReputations.userId, userId),
    });
  }

  return reputation;
}

/**
 * Get quality checks for a vector
 */
export async function getVectorQualityChecks(vectorId: number) {
  const db = await getDb();
  
  return await db.query.vectorQualityChecks.findMany({
    where: eq(vectorQualityChecks.vectorId, vectorId),
    orderBy: [desc(vectorQualityChecks.createdAt)],
  });
}
