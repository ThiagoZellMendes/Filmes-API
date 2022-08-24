import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';
import { RoleUsers } from 'src/user/entities/role.enum';
import { AuthService } from './auth.service';
import { Roles } from './decorators/roles.decorator';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { AuthRequestModel } from './models/authRequestModel';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiExcludeEndpoint()
  @Roles(RoleUsers.ADMIN)
  @UseGuards(LocalAuthGuard, RolesGuard)
  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Request() req: AuthRequestModel) {
    return this.authService.login(req.user);
  }
}
