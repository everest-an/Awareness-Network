import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('interactions')
export class Interaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @Column()
  contactId: string;

  @Column()
  channel: string; // email, phone, meeting, message

  @Column({ type: 'text', nullable: true })
  notes: string;

  @Column({ type: 'timestamp' })
  timestamp: Date;

  @CreateDateColumn()
  createdAt: Date;
}
