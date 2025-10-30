import { Controller, Get, Post, Put, Body, Param, Query, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { NetworkService } from './network.service';

@Controller('api/network')
@UseGuards(JwtAuthGuard)
export class NetworkController {
  constructor(private readonly networkService: NetworkService) {}

  @Get('contacts')
  async getContacts(
    @Request() req,
    @Query('frequency') frequency?: string,
    @Query('sortBy') sortBy?: string,
  ) {
    return this.networkService.getContacts(req.user.userId, frequency, sortBy);
  }

  @Get('contacts/:id')
  async getContactDetails(@Request() req, @Param('id') contactId: string) {
    return this.networkService.getContactDetails(req.user.userId, contactId);
  }

  @Post('contacts/:id/interaction')
  async recordInteraction(
    @Request() req,
    @Param('id') contactId: string,
    @Body() interactionData: any,
  ) {
    return this.networkService.recordInteraction(
      req.user.userId,
      contactId,
      interactionData.channel,
      interactionData.notes,
    );
  }

  @Put('contacts/:id/company')
  async updateCompanyInfo(
    @Request() req,
    @Param('id') contactId: string,
    @Body() companyInfo: any,
  ) {
    return this.networkService.updateCompanyInfo(req.user.userId, contactId, companyInfo);
  }

  @Get('analytics')
  async getNetworkAnalytics(@Request() req) {
    return this.networkService.getNetworkAnalytics(req.user.userId);
  }
}
