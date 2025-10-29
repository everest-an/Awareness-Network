import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../users/user.entity';

export enum MemoryType {
  PHOTO = 'photo',
  MESSAGE = 'message',
  CONTACT = 'contact',
  NOTE = 'note',
}

@Entity('memories')
export class Memory {
  @PrimaryGeneratedColumn('uuid')
  memoryId: string;

  @Column('uuid')
  userId: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({
    type: 'enum',
    enum: MemoryType,
  })
  type: MemoryType;

  @Column({ type: 'text' })
  encryptedContent: string;

  @Column({ type: 'text' })
  encryptedMetadata: string;

  @Column({ nullable: true })
  sourceApp: string;

  @Column({ type: 'timestamp' })
  capturedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
