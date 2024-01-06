import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Alimjang {
  @PrimaryGeneratedColumn()
  alimjangId?: number;

  @Column()
  name: string;

  @Column()
  owner: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'datetime', nullable: true })
  updatedAt: Date;
}
