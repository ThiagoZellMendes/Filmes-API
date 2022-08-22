import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { Repository } from 'typeorm';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { Filme } from './entities/filme.entity';

@Injectable()
export class FilmesService {
  constructor(
    @InjectRepository(Filme) private readonly repository: Repository<Filme>,
  ) {}

  create(createFilmeDto: CreateFilmeDto): Promise<Filme> {
    const filme = this.repository.create(createFilmeDto);
    return this.repository.save(filme);
  }

  findToOrder(options: IPaginationOptions): Promise<Pagination<Filme>> {
    const queryBuilder = this.repository.createQueryBuilder('f');

    queryBuilder.select([
      'f.frontCoverURL',
      'f.title',
      'f.description',
      'f.cover',
      'f.yearRelease',
      'f.genre',
      'f.averageImdb',
    ]);

    queryBuilder.orderBy('f.yearRelease', 'ASC');

    return paginate<Filme>(queryBuilder, options);
  }

  async findOneBy(id: string): Promise<Filme> {
    const filme = await this.repository.findOneBy({ id: id });
    return filme;
  }

  async update(id: string, updateFilmeDto: UpdateFilmeDto): Promise<Filme> {
    const filme = await this.repository.preload({
      id: id,
      ...updateFilmeDto,
    });
    if (!filme) {
      throw new NotFoundException(`Movie ${id} not found`);
    }
    return this.repository.save(filme);
  }

  async remove(id: string) {
    const filme = await this.findOneBy(id);
    return this.repository.remove(filme);
  }
}
