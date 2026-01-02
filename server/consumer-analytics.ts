/**
 * Consumer Analytics Module
 * 
 * Provides usage statistics, cost analysis, and performance metrics
 * for consumers to optimize their AI capability usage.
 * 
 * @module server/consumer-analytics
 */

import { getDb } from "./db";
import { vectorInvocations, latentVectors } from "../drizzle/schema";
import { eq, and, gte, sql, desc } from "drizzle-orm";

/**
 * Overall invocation statistics for a user
 */
export interface UserInvocationStats {
  totalInvocations: number;
  totalCost: number;
  avgResponseTime: number;
  successRate: number;
}

/**
 * Daily invocation trend data point
 */
export interface InvocationTrendPoint {
  date: string;
  count: number;
  cost: number;
  avgTime: number;
}

/**
 * Per-vector usage statistics
 */
export interface VectorUsageStats {
  vectorId: number;
  vectorName: string;
  invocationCount: number;
  totalCost: number;
  avgResponseTime: number;
  successRate: number;
  lastUsed: Date;
}

/**
 * Cost breakdown by category
 */
export interface CostBreakdown {
  category: string;
  totalCost: number;
  invocationCount: number;
  avgCostPerCall: number;
}

/**
 * Performance comparison metrics
 */
export interface PerformanceMetrics {
  vectorId: number;
  vectorName: string;
  category: string;
  avgResponseTime: number;
  p50ResponseTime: number;
  p95ResponseTime: number;
  successRate: number;
}

/**
 * Monthly spending summary
 */
export interface MonthlySpending {
  month: string;
  totalCost: number;
  invocationCount: number;
  uniqueVectors: number;
}

/**
 * Get overall invocation statistics for a user
 * 
 * @param userId - User ID
 * @param days - Number of days to look back (default: 30)
 * @returns Overall statistics including total invocations, cost, avg response time, and success rate
 */
export async function getUserInvocationStats(
  userId: number,
  days: number = 30
): Promise<UserInvocationStats> {
  const db = await getDb();
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);

  const stats = await db
    .select({
      totalInvocations: sql<number>`CAST(COUNT(*) AS SIGNED)`,
      totalCost: sql<number>`COALESCE(SUM(${vectorInvocations.cost}), 0)`,
      avgResponseTime: sql<number>`COALESCE(AVG(${vectorInvocations.executionTime}), 0)`,
      successRate: sql<number>`COALESCE(SUM(CASE WHEN ${vectorInvocations.status} = 'success' THEN 1 ELSE 0 END) * 100.0 / NULLIF(COUNT(*), 0), 100)`,
    })
    .from(vectorInvocations)
    .where(
      and(
        eq(vectorInvocations.userId, userId),
        gte(vectorInvocations.createdAt, startDate)
      )
    );

  return stats[0] || {
    totalInvocations: 0,
    totalCost: 0,
    avgResponseTime: 0,
    successRate: 100,
  };
}

/**
 * Get daily invocation trend for a user
 * 
 * @param userId - User ID
 * @param days - Number of days to look back (default: 30)
 * @returns Array of daily trend data points
 */
export async function getUserInvocationTrend(
  userId: number,
  days: number = 30
): Promise<InvocationTrendPoint[]> {
  const db = await getDb();
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);

  const trend = await db
    .select({
      date: sql<string>`DATE(${vectorInvocations.createdAt})`,
      count: sql<number>`CAST(COUNT(*) AS SIGNED)`,
      cost: sql<number>`COALESCE(SUM(${vectorInvocations.cost}), 0)`,
      avgTime: sql<number>`COALESCE(AVG(${vectorInvocations.executionTime}), 0)`,
    })
    .from(vectorInvocations)
    .where(
      and(
        eq(vectorInvocations.userId, userId),
        gte(vectorInvocations.createdAt, startDate)
      )
    )
    .groupBy(sql`DATE(${vectorInvocations.createdAt})`)
    .orderBy(sql`DATE(${vectorInvocations.createdAt})`);

  return trend;
}

/**
 * Get per-vector usage statistics for a user
 * 
 * @param userId - User ID
 * @returns Array of usage statistics for each vector
 */
export async function getUserVectorUsage(
  userId: number
): Promise<VectorUsageStats[]> {
  const db = await getDb();

  const usage = await db
    .select({
      vectorId: vectorInvocations.vectorId,
      vectorName: latentVectors.name,
      invocationCount: sql<number>`CAST(COUNT(*) AS SIGNED)`,
      totalCost: sql<number>`COALESCE(SUM(${vectorInvocations.cost}), 0)`,
      avgResponseTime: sql<number>`COALESCE(AVG(${vectorInvocations.executionTime}), 0)`,
      successRate: sql<number>`COALESCE(SUM(CASE WHEN ${vectorInvocations.status} = 'success' THEN 1 ELSE 0 END) * 100.0 / NULLIF(COUNT(*), 0), 100)`,
      lastUsed: sql<Date>`MAX(${vectorInvocations.createdAt})`,
    })
    .from(vectorInvocations)
    .innerJoin(latentVectors, eq(vectorInvocations.vectorId, latentVectors.id))
    .where(eq(vectorInvocations.userId, userId))
    .groupBy(vectorInvocations.vectorId, latentVectors.name)
    .orderBy(desc(sql`COUNT(*)`));

  return usage;
}

/**
 * Get cost breakdown by category for a user
 * 
 * @param userId - User ID
 * @param days - Number of days to look back (default: 30)
 * @returns Array of cost breakdown by category
 */
export async function getUserCostBreakdown(
  userId: number,
  days: number = 30
): Promise<CostBreakdown[]> {
  const db = await getDb();
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);

  const breakdown = await db
    .select({
      category: latentVectors.category,
      totalCost: sql<number>`COALESCE(SUM(${vectorInvocations.cost}), 0)`,
      invocationCount: sql<number>`CAST(COUNT(*) AS SIGNED)`,
      avgCostPerCall: sql<number>`COALESCE(AVG(${vectorInvocations.cost}), 0)`,
    })
    .from(vectorInvocations)
    .innerJoin(latentVectors, eq(vectorInvocations.vectorId, latentVectors.id))
    .where(
      and(
        eq(vectorInvocations.userId, userId),
        gte(vectorInvocations.createdAt, startDate)
      )
    )
    .groupBy(latentVectors.category)
    .orderBy(desc(sql`SUM(${vectorInvocations.cost})`));

  return breakdown;
}

/**
 * Get performance comparison across vectors for a user
 * 
 * Note: PERCENTILE_CONT is not supported in MySQL, using AVG as fallback
 * 
 * @param userId - User ID
 * @returns Array of performance metrics for each vector
 */
export async function getUserPerformanceComparison(
  userId: number
): Promise<PerformanceMetrics[]> {
  const db = await getDb();

  const comparison = await db
    .select({
      vectorId: vectorInvocations.vectorId,
      vectorName: latentVectors.name,
      category: latentVectors.category,
      avgResponseTime: sql<number>`COALESCE(AVG(${vectorInvocations.executionTime}), 0)`,
      // MySQL doesn't support PERCENTILE_CONT, using AVG as approximation
      p50ResponseTime: sql<number>`COALESCE(AVG(${vectorInvocations.executionTime}), 0)`,
      p95ResponseTime: sql<number>`COALESCE(MAX(${vectorInvocations.executionTime}), 0)`,
      successRate: sql<number>`COALESCE(SUM(CASE WHEN ${vectorInvocations.status} = 'success' THEN 1 ELSE 0 END) * 100.0 / NULLIF(COUNT(*), 0), 100)`,
    })
    .from(vectorInvocations)
    .innerJoin(latentVectors, eq(vectorInvocations.vectorId, latentVectors.id))
    .where(eq(vectorInvocations.userId, userId))
    .groupBy(vectorInvocations.vectorId, latentVectors.name, latentVectors.category)
    .orderBy(desc(sql`AVG(${vectorInvocations.executionTime})`));

  return comparison;
}

/**
 * Get monthly spending summary for a user
 * 
 * @param userId - User ID
 * @param months - Number of months to look back (default: 6)
 * @returns Array of monthly spending summaries
 */
export async function getUserMonthlySpending(
  userId: number,
  months: number = 6
): Promise<MonthlySpending[]> {
  const db = await getDb();
  const startDate = new Date();
  startDate.setMonth(startDate.getMonth() - months);

  const spending = await db
    .select({
      month: sql<string>`DATE_FORMAT(${vectorInvocations.createdAt}, '%Y-%m')`,
      totalCost: sql<number>`COALESCE(SUM(${vectorInvocations.cost}), 0)`,
      invocationCount: sql<number>`CAST(COUNT(*) AS SIGNED)`,
      uniqueVectors: sql<number>`CAST(COUNT(DISTINCT ${vectorInvocations.vectorId}) AS SIGNED)`,
    })
    .from(vectorInvocations)
    .where(
      and(
        eq(vectorInvocations.userId, userId),
        gte(vectorInvocations.createdAt, startDate)
      )
    )
    .groupBy(sql`DATE_FORMAT(${vectorInvocations.createdAt}, '%Y-%m')`)
    .orderBy(sql`DATE_FORMAT(${vectorInvocations.createdAt}, '%Y-%m')`);

  return spending;
}
