import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KnowledgeNode } from './entities/knowledge-node.entity';
import { KnowledgeConnection } from './entities/knowledge-connection.entity';

@Injectable()
export class KnowledgeService {
  constructor(
    @InjectRepository(KnowledgeNode)
    private nodeRepository: Repository<KnowledgeNode>,
    @InjectRepository(KnowledgeConnection)
    private connectionRepository: Repository<KnowledgeConnection>,
  ) {}

  async getKnowledgeGraph(userId: string) {
    const nodes = await this.nodeRepository.find({
      where: { userId },
      relations: ['connections'],
    });

    const connections = await this.connectionRepository.find({
      where: { userId },
    });

    return {
      nodes: nodes.map(node => ({
        id: node.id,
        type: node.type,
        title: node.title,
        description: node.description,
        timestamp: node.timestamp,
        metadata: node.metadata,
        connections: connections
          .filter(c => c.fromNodeId === node.id)
          .map(c => ({
            nodeId: c.toNodeId,
            strength: c.strength,
            type: c.type,
          })),
      })),
    };
  }

  async naturalLanguageSearch(userId: string, query: string) {
    // Extract patterns from natural language query
    const lowerQuery = query.toLowerCase();
    
    // Time pattern
    const yearMatch = query.match(/\d{4}/);
    const year = yearMatch ? yearMatch[0] : null;

    // Location pattern
    const locationMatch = query.match(/in\s+([a-z\s,]+)|at\s+([a-z\s,]+)/i);
    const location = locationMatch ? (locationMatch[1] || locationMatch[2]).trim() : null;

    // Type pattern
    let type = null;
    if (lowerQuery.includes('photo') || lowerQuery.includes('memor')) {
      type = 'memory';
    } else if (lowerQuery.includes('people') || lowerQuery.includes('person')) {
      type = 'person';
    } else if (lowerQuery.includes('event')) {
      type = 'event';
    } else if (lowerQuery.includes('place')) {
      type = 'place';
    }

    // Build query
    let queryBuilder = this.nodeRepository
      .createQueryBuilder('node')
      .where('node.userId = :userId', { userId });

    if (year) {
      queryBuilder = queryBuilder.andWhere('node.timestamp LIKE :year', { year: `%${year}%` });
    }

    if (location) {
      queryBuilder = queryBuilder.andWhere(
        "(node.metadata->>'location' ILIKE :location OR node.title ILIKE :location OR node.description ILIKE :location)",
        { location: `%${location}%` }
      );
    }

    if (type) {
      queryBuilder = queryBuilder.andWhere('node.type = :type', { type });
    }

    // Fallback: general text search
    if (!year && !location && !type) {
      queryBuilder = queryBuilder.andWhere(
        "(node.title ILIKE :query OR node.description ILIKE :query OR node.metadata::text ILIKE :query)",
        { query: `%${query}%` }
      );
    }

    const nodes = await queryBuilder.getMany();

    return {
      query,
      results: nodes.map(node => ({
        id: node.id,
        type: node.type,
        title: node.title,
        description: node.description,
        timestamp: node.timestamp,
        metadata: node.metadata,
      })),
    };
  }

  async createNode(userId: string, nodeData: any) {
    const node = this.nodeRepository.create({
      userId,
      type: nodeData.type,
      title: nodeData.title,
      description: nodeData.description,
      timestamp: nodeData.timestamp || new Date().toISOString(),
      metadata: nodeData.metadata || {},
    });

    return this.nodeRepository.save(node);
  }

  async createConnection(
    userId: string,
    fromNodeId: string,
    toNodeId: string,
    type: string,
    strength: number,
  ) {
    const connection = this.connectionRepository.create({
      userId,
      fromNodeId,
      toNodeId,
      type,
      strength,
    });

    return this.connectionRepository.save(connection);
  }
}
