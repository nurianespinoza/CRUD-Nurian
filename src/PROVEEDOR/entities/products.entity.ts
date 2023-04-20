import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  lastname: string;

  @Column({ type: 'numeric' })
  phone: number;

  @Column({ type: 'text' })
  identificationcard: string;

  @Column({ type: 'text' })
  g_mail: string;

  @Column({ type: 'numeric' })
  bank_accounts: number;

  @Column({ type: 'text' })
  legal_representative_identification: string;


}