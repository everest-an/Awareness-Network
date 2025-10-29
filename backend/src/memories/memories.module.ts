import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Memory } from './memory.entity';
import { MemoriesService } from './memories.service';
import { MemoriesController } from './memories.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Memory])],
  providers: [MemoriesService],
  controllers: [MemoriesController],
  exports: [MemoriesService],
})
export class MemoriesModule {}
