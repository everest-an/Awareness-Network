import { Controller, Get, Post, Body, Param, UseGuards, Request } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Controller('contacts')
@UseGuards(JwtAuthGuard)
export class ContactsController {
  constructor(private contactsService: ContactsService) {}

  @Post()
  async create(@Request() req, @Body() body: any) {
    return this.contactsService.create(req.user.userId, body);
  }

  @Get()
  async findAll(@Request() req) {
    return this.contactsService.findAll(req.user.userId);
  }

  @Get(':id')
  async findOne(@Request() req, @Param('id') id: string) {
    return this.contactsService.findOne(id, req.user.userId);
  }
}
