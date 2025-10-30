import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MemoriesModule } from './memories/memories.module';
import { ContactsModule } from './contacts/contacts.module';
import { JobsModule } from './jobs/jobs.module';
import { KnowledgeModule } from './knowledge/knowledge.module';
import { NetworkModule } from './network/network.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST', 'localhost'),
        port: configService.get('DB_PORT', 5432),
        username: configService.get('DB_USERNAME', 'postgres'),
        password: configService.get('DB_PASSWORD', 'postgres'),
        database: configService.get('DB_DATABASE', 'awareness_network'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: configService.get('NODE_ENV') !== 'production', // Auto-sync in development
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    UsersModule,
    MemoriesModule,
    ContactsModule,
    JobsModule,
    KnowledgeModule,
    NetworkModule,
  ],
})
export class AppModule {}
