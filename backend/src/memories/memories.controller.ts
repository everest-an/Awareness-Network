import { Controller, Get, Post, Delete, Body, Param, Query, UseGuards, Request } from '@nestjs/common';
import { MemoriesService } from './memories.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Controller('memories')
@UseGuards(JwtAuthGuard)
export class MemoriesController {
  constructor(private memoriesService: MemoriesService) {}

  @Post()
  async create(@Request() req, @Body() body: any) {
    return this.memoriesService.create(req.user.userId, body);
  }

  @Get()
  async findAll(
    @Request() req,
    @Query('limit') limit: string = '50',
    @Query('offset') offset: string = '0',
  ) {
    return this.memoriesService.findAll(
      req.user.userId,
      parseInt(limit),
      parseInt(offset),
    );
  }

  @Get(':id')
  async findOne(@Request() req, @Param('id') id: string) {
    return this.memoriesService.findOne(id, req.user.userId);
  }

  @Delete(':id')
  async delete(@Request() req, @Param('id') id: string) {
    await this.memoriesService.delete(id, req.user.userId);
    return { message: 'Memory deleted successfully' };
  }
}
