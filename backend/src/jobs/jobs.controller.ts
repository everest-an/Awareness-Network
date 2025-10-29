import { Controller, Get, Post, Body, Param, UseGuards, Request } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobType } from './job.entity';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Controller('jobs')
@UseGuards(JwtAuthGuard)
export class JobsController {
  constructor(private jobsService: JobsService) {}

  @Post('ocr')
  async submitOcrJob(@Request() req, @Body() body: { memoryId: string }) {
    const job = await this.jobsService.create(req.user.userId, JobType.OCR, body);
    return { jobId: job.jobId, status: job.status };
  }

  @Post('video-montage')
  async submitVideoMontageJob(@Request() req, @Body() body: any) {
    const job = await this.jobsService.create(req.user.userId, JobType.VIDEO_MONTAGE, body);
    return { jobId: job.jobId, status: job.status };
  }

  @Get(':id')
  async getJobStatus(@Request() req, @Param('id') id: string) {
    return this.jobsService.findOne(id, req.user.userId);
  }
}
