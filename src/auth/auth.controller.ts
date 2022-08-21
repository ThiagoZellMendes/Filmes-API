import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { isPublic } from './decorators/is-public.decorator';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthRequestModel } from './models/authRequestModel';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @isPublic()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  login(@Request() req: AuthRequestModel) {
    return this.authService.login(req.user);
  }
}
