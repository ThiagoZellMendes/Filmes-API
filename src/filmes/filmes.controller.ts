import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { Pagination } from 'nestjs-typeorm-paginate';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { Filme } from './entities/filme.entity';
import { FilmesService } from './filmes.service';

@Controller('filmes')
export class FilmesController {
  constructor(private readonly filmesService: FilmesService) {}

  @Post()
  @ApiTags('Filmes')
  create(@Body() createFilmeDto: CreateFilmeDto) {
    return this.filmesService.create(createFilmeDto);
  }

  @Get()
  @IsPublic()
  @ApiTags('Filmes')
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  async index(
    @Query('page') page: 1,
    @Query('limit') limit: 10,
  ): Promise<Pagination<Filme>> {
    limit = limit > 10 ? 10 : limit;
    return await this.filmesService.findToOrder({ page, limit });
  }

  @Get(':id')
  @IsPublic()
  @ApiTags('Filmes')
  findOneBy(@Param('id') id: string) {
    return this.filmesService.findOneBy(id);
  }

  @Patch(':id')
  @ApiTags('Filmes')
  update(@Param('id') id: string, @Body() updateFilmeDto: UpdateFilmeDto) {
    return this.filmesService.update(id, updateFilmeDto);
  }

  @Delete(':id')
  @ApiTags('Filmes')
  remove(@Param('id') id: string) {
    return this.filmesService.remove(id);
  }
}
