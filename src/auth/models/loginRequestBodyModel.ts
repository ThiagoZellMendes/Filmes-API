import { IsEmail, IsString } from 'class-validator';

//to valid Email and Password before request.
export class LoginRequestBodyModel {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
