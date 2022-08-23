import { RoleUsers } from 'src/user/entities/role.enum';

export interface UserFromJwtModel {
  id: string;
  email: string;
  name: string;
  roleUsers?: RoleUsers;
}
