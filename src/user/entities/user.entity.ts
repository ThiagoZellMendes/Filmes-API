import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @UpdateDateColumn({
    name: 'update_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAt: Date;

  @CreateDateColumn({
    name: 'create_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date;

  @Column({
    name: 'email',
    type: 'varchar',
    nullable: false,
    length: 255,
  })
  email: string;

  @Column({
    name: 'passaword',
    type: 'varchar',
    nullable: false,
    length: 255,
  })
  password: string;

  @Column({
    name: 'nome',
    type: 'varchar',
    nullable: false,
  })
  name: string;
}
