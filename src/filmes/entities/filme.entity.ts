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
    name: 'front_cover_url',
    type: 'varchar',
    nullable: false,
    length: 255,
  })
  frontCoverURL: string;

  @Column({
    name: 'title',
    type: 'varchar',
    nullable: false,
    length: 255,
  })
  title: string;

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
    name: 'year_release',
    type: 'varchar',
    nullable: false,
  })
  yearRelease: string;

  @Column({
    name: 'genre',
    type: 'varchar',
    nullable: false,
    length: 255,
  })
  genre: string;

  @Column({
    name: 'average_imdb',
    type: 'varchar',
    nullable: false,
  })
  averageImdb: string;
}
