import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

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
