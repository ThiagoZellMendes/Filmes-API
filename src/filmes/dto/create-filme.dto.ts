import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateFilmeDto {
  @ApiProperty({ example: 'Final Fantasy' })
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @ApiProperty({ example: 'Animação baseada em jogos da serie Final Fantasy' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiPropertyOptional({ example: 'Cool' })
  @IsString()
  @IsOptional()
  cover: string;

  @ApiProperty({ example: '2018' })
  @IsString()
  @IsNotEmpty()
  anoLancamento: string;

  @ApiProperty({ example: 'Fantasia/animação' })
  @IsString()
  @IsNotEmpty()
  generos: string;

  @ApiProperty({ example: '10.0' })
  @IsString()
  @IsNotEmpty()
  mediaImdb: string;
}
