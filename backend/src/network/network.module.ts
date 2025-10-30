import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NetworkController } from './network.controller';
import { NetworkService } from './network.service';
import { NetworkContact } from './entities/network-contact.entity';
import { Interaction } from './entities/interaction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NetworkContact, Interaction])],
  controllers: [NetworkController],
  providers: [NetworkService],
  exports: [NetworkService],
})
export class NetworkModule {}
