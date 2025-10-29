import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Memory } from './memory.entity';

@Injectable()
export class MemoriesService {
  constructor(
    @InjectRepository(Memory)
    private memoriesRepository: Repository<Memory>,
  ) {}

  async create(userId: string, memoryData: Partial<Memory>): Promise<Memory> {
    const memory = this.memoriesRepository.create({
      ...memoryData,
      userId,
    });
    return this.memoriesRepository.save(memory);
  }

  async findAll(userId: string, limit: number = 50, offset: number = 0): Promise<Memory[]> {
    return this.memoriesRepository.find({
      where: { userId },
      order: { capturedAt: 'DESC' },
      take: limit,
      skip: offset,
    });
  }

  async findOne(memoryId: string, userId: string): Promise<Memory | null> {
    return this.memoriesRepository.findOne({
      where: { memoryId, userId },
    });
  }

  async delete(memoryId: string, userId: string): Promise<void> {
    await this.memoriesRepository.delete({ memoryId, userId });
  }
}
