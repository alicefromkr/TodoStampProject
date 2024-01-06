import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserAcl {
  @PrimaryGeneratedColumn()
  aclId?: number;

  @Column()
  subject: string;

  @Column()
  objective: string;

  @Column()
  predicate: string;

  @Column()
  userId: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'datetime', nullable: true })
  updatedAt: Date;
}
