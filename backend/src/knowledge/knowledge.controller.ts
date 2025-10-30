import { Controller, Get, Post, Body, Query, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { KnowledgeService } from './knowledge.service';

@Controller('api/knowledge')
@UseGuards(JwtAuthGuard)
export class KnowledgeController {
  constructor(private readonly knowledgeService: KnowledgeService) {}

  @Get('graph')
  async getKnowledgeGraph(@Request() req) {
    return this.knowledgeService.getKnowledgeGraph(req.user.userId);
  }

  @Get('search')
  async searchKnowledge(
    @Request() req,
    @Query('query') query: string,
  ) {
    return this.knowledgeService.naturalLanguageSearch(req.user.userId, query);
  }

  @Post('node')
  async createNode(@Request() req, @Body() nodeData: any) {
    return this.knowledgeService.createNode(req.user.userId, nodeData);
  }

  @Post('connection')
  async createConnection(@Request() req, @Body() connectionData: any) {
    return this.knowledgeService.createConnection(
      req.user.userId,
      connectionData.fromNodeId,
      connectionData.toNodeId,
      connectionData.type,
      connectionData.strength,
    );
  }
}
