import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Computer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  title: string;

  @Column({ type: 'numeric' })
  price: number;

  @Column('text')
  processor: string;

  @Column({ type: 'text' })
  RAM: string;

  @Column({ type: 'text' })
  Discoduro: string;

  @Column({ type: 'text' })
  pantalla: string;

  @Column({ type: 'text' })
  brand: string;


}