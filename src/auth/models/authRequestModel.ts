import { Request } from 'express';
import { User } from 'src/user/entities/user.entity';

//add user tiping in Request(Express)
export interface AuthRequestModel extends Request {
  user: User;
}
