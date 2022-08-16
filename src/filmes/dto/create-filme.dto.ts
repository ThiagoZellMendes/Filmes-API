import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateFilmeDto {
  @IsString()
  @IsNotEmpty()
  Titulo: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  Cover: string;

  @IsDate()
  @IsNotEmpty()
  anoLancamento: Date;

  @IsString()
  @IsNotEmpty()
  generos: string;

  @IsString()
  @IsNotEmpty()
  mediaImbd: string;
}

// Titulo
// Capa
// Cover
// Ano de lançamento
// Generos
// Média IMDB
