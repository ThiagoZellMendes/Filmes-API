import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RoleUsers } from 'src/user/entities/role.enum';
import { User } from 'src/user/entities/user.entity';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requireRoles = this.reflector.getAllAndOverride<RoleUsers[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requireRoles) {
      return true;
    }

    const { user }: { user: User } = context.switchToHttp().getRequest();

    console.log(user);

    return requireRoles.some((role) => user.roleUsers.includes(role));
  }
}
