import { RoleUsers } from 'src/user/entities/role.enum';

//add user tiping in payload
export interface UserPayloadModel {
  sub: string;
  email: string;
  name: string;
  roleUsers?: RoleUsers;
  iat?: number;
  exp?: number;
}
