import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { ApiTags } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiTags('User')
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @Get()
  @IsPublic()
  @ApiTags('User')
  findAll() {
    return this.userService.findAll();
  }

  @Get(':email')
  @ApiTags('User')
  findByEmail(@Body('email') email: string) {
    return this.userService.findByEmail(email);
  }

  @Patch(':id')
  @ApiTags('User')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiTags('User')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
