import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateFilmeDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  cover: string;

  @IsDate()
  @IsNotEmpty()
  anoLancamento: number;

  @IsString()
  @IsNotEmpty()
  generos: string;

  @IsString()
  @IsNotEmpty()
  mediaImbd: string;
}
