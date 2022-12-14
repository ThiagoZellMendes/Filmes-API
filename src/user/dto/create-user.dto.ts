import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { RoleUsers } from '../entities/role.enum';

export class CreateUserDto {
  @ApiProperty({ example: 'user or admin' })
  @IsEnum(RoleUsers)
  @IsNotEmpty()
  roleUsers: RoleUsers;

  @ApiProperty({ example: 'seuemail@lianon.com' })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: '123456' })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'password too weak, You need an uppercase and lowercase letter and numbers ',
  })
  password: string;

  @ApiPropertyOptional({ example: 'Jack Lianon' })
  @IsString()
  @IsOptional()
  name: string;
}
