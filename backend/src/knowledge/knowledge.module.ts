import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KnowledgeController } from './knowledge.controller';
import { KnowledgeService } from './knowledge.service';
import { KnowledgeNode } from './entities/knowledge-node.entity';
import { KnowledgeConnection } from './entities/knowledge-connection.entity';

@Module({
  imports: [TypeOrmModule.forFeature([KnowledgeNode, KnowledgeConnection])],
  controllers: [KnowledgeController],
  providers: [KnowledgeService],
  exports: [KnowledgeService],
})
export class KnowledgeModule {}
