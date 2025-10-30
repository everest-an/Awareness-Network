import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('network_contacts')
export class NetworkContact {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  company: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column('jsonb')
  firstMet: {
    date: string;
    location: string;
    context: string;
  };

  @Column({ default: 0 })
  totalInteractions: number;

  @Column({ nullable: true })
  lastContact: string;

  @Column({ default: 'low' })
  interactionFrequency: 'high' | 'medium' | 'low';

  @Column('jsonb', { default: { email: 0, phone: 0, meeting: 0, message: 0 } })
  interactionChannels: {
    email: number;
    phone: number;
    meeting: number;
    message: number;
  };

  @Column('jsonb', { nullable: true })
  companyInfo: {
    name: string;
    industry: string;
    size: string;
    description: string;
    businessType: string;
  };

  @Column('simple-array', { default: '' })
  tags: string[];

  @Column('simple-array', { default: '' })
  notes: string[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
