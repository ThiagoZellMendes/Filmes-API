import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/entities/user.entity';
import { UserPayloadModel } from './models/userPayloadModel';
import { JwtService } from '@nestjs/jwt';
import { UserTokenModel } from './models/userTokenModel';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  login(user: User): UserTokenModel {
    const payload: UserPayloadModel = {
      sub: user.id,
      email: user.email,
      name: user.name,
      roleUsers: user.roleUsers,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);

    // Check the password hash is valid with on the database;
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      return {
        ...user,
        password: undefined,
      };
    }
    throw new Error('Email or password is not valid');
  }
}
