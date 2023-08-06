import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clients } from './clients.entity';
import { CreateClients } from './cli/create_cli.cli';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Clients)
    private readonly clientsRepository: Repository<Clients>,
  ) {}

  async create(cli: CreateClients){
    const client = this.clientsRepository.create(cli);

    return await this.clientsRepository.save(client);
  }

  async update(id: number, cli: CreateClients){
    const client = await this.clientsRepository.findOne({where:{id}});

    Object.assign(client, cli);

    return await this.clientsRepository.save(client);
  }

  findAll(): Promise<Clients[]> {
    return this.clientsRepository.find();
  }

  findOne(id: number): Promise<Clients | null> {
    return this.clientsRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.clientsRepository.delete(id);
  }
}