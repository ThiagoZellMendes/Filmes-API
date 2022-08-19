import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateFilmeDto {
  @ApiProperty({ example: 'URL CAPA' })
  @IsString()
  @IsNotEmpty()
  frontCoverURL: string;

  @ApiProperty({ example: 'Final Fantasy' })
  @IsString()
  @IsNotEmpty()
  title: string;

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
  yearRelease: string;

  @ApiProperty({ example: 'Fantasia/animação' })
  @IsString()
  @IsNotEmpty()
  genre: string;

  @ApiProperty({ example: '10.0' })
  @IsString()
  @IsNotEmpty()
  averageImdb: string;
}
