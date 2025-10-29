import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './contact.entity';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact)
    private contactsRepository: Repository<Contact>,
  ) {}

  async create(userId: string, contactData: Partial<Contact>): Promise<Contact> {
    const contact = this.contactsRepository.create({
      ...contactData,
      userId,
    });
    return this.contactsRepository.save(contact);
  }

  async findAll(userId: string): Promise<Contact[]> {
    return this.contactsRepository.find({
      where: { userId },
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(contactId: string, userId: string): Promise<Contact | null> {
    return this.contactsRepository.findOne({
      where: { contactId, userId },
    });
  }
}
