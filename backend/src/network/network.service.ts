import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NetworkContact } from './entities/network-contact.entity';
import { Interaction } from './entities/interaction.entity';

@Injectable()
export class NetworkService {
  constructor(
    @InjectRepository(NetworkContact)
    private contactRepository: Repository<NetworkContact>,
    @InjectRepository(Interaction)
    private interactionRepository: Repository<Interaction>,
  ) {}

  async getContacts(userId: string, frequency?: string, sortBy?: string) {
    let queryBuilder = this.contactRepository
      .createQueryBuilder('contact')
      .where('contact.userId = :userId', { userId });

    // Filter by frequency
    if (frequency && frequency !== 'all') {
      queryBuilder = queryBuilder.andWhere('contact.interactionFrequency = :frequency', { frequency });
    }

    // Sort
    switch (sortBy) {
      case 'frequency':
        queryBuilder = queryBuilder.orderBy('contact.totalInteractions', 'DESC');
        break;
      case 'recent':
        queryBuilder = queryBuilder.orderBy('contact.lastContact', 'DESC');
        break;
      case 'name':
        queryBuilder = queryBuilder.orderBy('contact.name', 'ASC');
        break;
      default:
        queryBuilder = queryBuilder.orderBy('contact.totalInteractions', 'DESC');
    }

    const contacts = await queryBuilder.getMany();

    return contacts.map(contact => ({
      id: contact.id,
      name: contact.name,
      title: contact.title,
      company: contact.company,
      email: contact.email,
      phone: contact.phone,
      firstMet: contact.firstMet,
      interactions: {
        total: contact.totalInteractions,
        lastContact: contact.lastContact,
        frequency: contact.interactionFrequency,
        channels: contact.interactionChannels,
      },
      companyInfo: contact.companyInfo,
      tags: contact.tags,
      notes: contact.notes,
    }));
  }

  async getContactDetails(userId: string, contactId: string) {
    const contact = await this.contactRepository.findOne({
      where: { id: contactId, userId },
    });

    if (!contact) {
      throw new Error('Contact not found');
    }

    const interactions = await this.interactionRepository.find({
      where: { contactId, userId },
      order: { timestamp: 'DESC' },
      take: 50,
    });

    return {
      ...contact,
      recentInteractions: interactions,
    };
  }

  async recordInteraction(
    userId: string,
    contactId: string,
    channel: string,
    notes?: string,
  ) {
    // Create interaction record
    const interaction = this.interactionRepository.create({
      userId,
      contactId,
      channel,
      notes,
      timestamp: new Date(),
    });

    await this.interactionRepository.save(interaction);

    // Update contact statistics
    const contact = await this.contactRepository.findOne({
      where: { id: contactId, userId },
    });

    if (contact) {
      contact.totalInteractions += 1;
      contact.lastContact = new Date().toISOString();
      
      // Update channel counts
      const channels = contact.interactionChannels || { email: 0, phone: 0, meeting: 0, message: 0 };
      if (channel in channels) {
        channels[channel] += 1;
      }
      contact.interactionChannels = channels;

      // Recalculate frequency
      contact.interactionFrequency = this.calculateFrequency(
        contact.totalInteractions,
        new Date(contact.firstMet.date),
        new Date(),
      );

      await this.contactRepository.save(contact);
    }

    return interaction;
  }

  async updateCompanyInfo(userId: string, contactId: string, companyInfo: any) {
    const contact = await this.contactRepository.findOne({
      where: { id: contactId, userId },
    });

    if (!contact) {
      throw new Error('Contact not found');
    }

    contact.companyInfo = {
      ...contact.companyInfo,
      ...companyInfo,
    };

    return this.contactRepository.save(contact);
  }

  async getNetworkAnalytics(userId: string) {
    const contacts = await this.contactRepository.find({ where: { userId } });

    const totalContacts = contacts.length;
    const totalInteractions = contacts.reduce((sum, c) => sum + c.totalInteractions, 0);
    
    const frequencyDistribution = {
      high: contacts.filter(c => c.interactionFrequency === 'high').length,
      medium: contacts.filter(c => c.interactionFrequency === 'medium').length,
      low: contacts.filter(c => c.interactionFrequency === 'low').length,
    };

    const industryDistribution = contacts.reduce((acc, c) => {
      if (c.companyInfo?.industry) {
        acc[c.companyInfo.industry] = (acc[c.companyInfo.industry] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);

    return {
      totalContacts,
      totalInteractions,
      averageInteractions: totalContacts > 0 ? totalInteractions / totalContacts : 0,
      frequencyDistribution,
      industryDistribution,
    };
  }

  private calculateFrequency(
    totalInteractions: number,
    firstMetDate: Date,
    currentDate: Date,
  ): 'high' | 'medium' | 'low' {
    const daysSinceFirstMet = Math.max(1, (currentDate.getTime() - firstMetDate.getTime()) / (1000 * 60 * 60 * 24));
    const interactionsPerMonth = (totalInteractions / daysSinceFirstMet) * 30;

    if (interactionsPerMonth >= 4) return 'high';
    if (interactionsPerMonth >= 1) return 'medium';
    return 'low';
  }
}
