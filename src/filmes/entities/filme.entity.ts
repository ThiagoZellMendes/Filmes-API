import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Filme extends BaseEntity {
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
    name: 'description',
    type: 'varchar',
    nullable: false,
    length: 255,
  })
  description: string;

  @Column({
    name: 'cover',
    type: 'varchar',
    nullable: false,
    length: 255,
  })
  cover: string;

  @Column({
    name: 'ano_lancamento',
    type: 'varchar',
    nullable: false,
  })
  anoLancamento: string;

  @Column({
    name: 'generos',
    type: 'varchar',
    nullable: false,
    length: 255,
  })
  generos: string;

  @Column({
    name: 'media_imdb',
    type: 'varchar',
    nullable: false,
  })
  mediaImdb: string;
}
