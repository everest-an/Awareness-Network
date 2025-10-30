import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('knowledge_nodes')
export class KnowledgeNode {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @Column()
  type: string; // person, place, event, memory, document

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column()
  timestamp: string;

  @Column('jsonb', { default: {} })
  metadata: {
    location?: string;
    tags?: string[];
    source?: string;
    [key: string]: any;
  };

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
