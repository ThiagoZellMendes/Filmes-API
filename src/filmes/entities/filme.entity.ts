// Titulo
// Capa
// Cover
// Ano de lançamento
// Generos
// Média IMDB
import {
  BaseEntity,
  Column,
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
  updateAT: Date;

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
    type: 'date',
    nullable: false,
    length: 4,
  })
  anoLancamento: number;

  @Column({
    name: 'generos',
    type: 'varchar',
    nullable: false,
    length: 255,
  })
  generos: string;

  @Column({
    name: 'media_imdb',
    type: 'number',
    nullable: false,
    length: 2,
  })
  mediaImdb: number;
}
