import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: "clients"})
export class Clients {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;
}