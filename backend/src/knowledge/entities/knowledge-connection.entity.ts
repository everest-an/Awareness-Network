import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('knowledge_connections')
export class KnowledgeConnection {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @Column()
  fromNodeId: string;

  @Column()
  toNodeId: string;

  @Column()
  type: string; // met_at, works_with, attended_by, location, etc.

  @Column('float')
  strength: number; // 0-1

  @CreateDateColumn()
  createdAt: Date;
}
