import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmesModule } from './filmes/filmes.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt.auth.guard';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: process.env.DB_SYNCHRONIZE === 'true',
    }),
    UserModule,
    AuthModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: process.env.IS_EXPIRATION_IN },
    }),
    FilmesModule,
  ],
  controllers: [AppController],
  providers: [
    AuthService,
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
