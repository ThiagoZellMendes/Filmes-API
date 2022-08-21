import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserFromJwtModel } from '../models/userFromJwtModel';
import { UserPayloadModel } from '../models/userPayloadModel';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET_KEY,
    });
  }

  async validate(payload: UserPayloadModel): Promise<UserFromJwtModel> {
    return {
      id: payload.sub,
      email: payload.email,
      name: payload.name,
    };
  }
}
