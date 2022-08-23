import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Request,
  Session,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request as RequestUser } from 'express';
import { RoleUsers } from 'src/user/entities/role.enum';
import { AuthService } from './auth.service';
import { IsPublic } from './decorators/is-public.decorator';
import { Roles } from './decorators/roles.decorator';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { AuthRequestModel } from './models/authRequestModel';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiTags('Auth')
  @Roles(RoleUsers.ADMIN)
  @UseGuards(LocalAuthGuard, RolesGuard)
  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Request() req: AuthRequestModel) {
    return this.authService.login(req.user);
  }

  @UseGuards(LocalAuthGuard)
  @Get('protected')
  getHello(@Request() req: AuthRequestModel) {
    return req.user;
  }
}
