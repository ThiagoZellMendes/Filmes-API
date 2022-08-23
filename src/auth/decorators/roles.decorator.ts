import { SetMetadata } from '@nestjs/common';
import { RoleUsers } from '../../user/entities/role.enum';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: RoleUsers[]) => SetMetadata(ROLES_KEY, roles);
