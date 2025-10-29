import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job, JobType, JobStatus } from './job.entity';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private jobsRepository: Repository<Job>,
  ) {}

  async create(userId: string, type: JobType, inputData: any): Promise<Job> {
    const job = this.jobsRepository.create({
      userId,
      type,
      inputData,
      status: JobStatus.PENDING,
    });
    return this.jobsRepository.save(job);
  }

  async findOne(jobId: string, userId: string): Promise<Job | null> {
    return this.jobsRepository.findOne({
      where: { jobId, userId },
    });
  }

  async updateStatus(jobId: string, status: JobStatus, result?: any, error?: string): Promise<void> {
    await this.jobsRepository.update(jobId, {
      status,
      result,
      error,
    });
  }
}
