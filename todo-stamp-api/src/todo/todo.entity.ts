import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column({ default: false })
  isChecked: boolean;

  @Column({ nullable: true })
  stampedBy: string;

  @BeforeInsert()
  @BeforeUpdate()
  convertObjectToString() {
    this.stampedBy = JSON.stringify(this.stampedBy);
  }

  @Column()
  alimjangId: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'datetime', nullable: true })
  updatedAt: Date;
}
