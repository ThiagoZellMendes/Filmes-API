import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RoleUsers } from './entities/role.enum';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @Roles(RoleUsers.ADMIN)
  @UseGuards(RolesGuard)
  @ApiTags('User')
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @Get()
  @Roles(RoleUsers.USER, RoleUsers.ADMIN)
  @UseGuards(RolesGuard)
  @ApiTags('User')
  findAll() {
    return this.userService.findAll();
  }

  @Get(':email')
  @Roles(RoleUsers.USER, RoleUsers.ADMIN)
  @ApiTags('User')
  findByEmail(@Body('email') email: string) {
    return this.userService.findByEmail(email);
  }

  @Patch(':id')
  @Roles(RoleUsers.ADMIN)
  @UseGuards(RolesGuard)
  @ApiTags('User')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @Roles(RoleUsers.ADMIN)
  @UseGuards(RolesGuard)
  @ApiTags('User')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
