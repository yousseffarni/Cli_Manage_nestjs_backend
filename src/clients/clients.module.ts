import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsService } from './clients.service';
import { Clients } from './clients.entity';
import { ClientsController } from './clients.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Clients])],
  providers: [ClientsService],
  controllers: [ClientsController],
  exports: [TypeOrmModule]
})
export class ClientsModule {}