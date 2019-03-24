import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { UserService } from './user/user.service';
import { AuthService } from './auth/auth.service';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AppGuard implements CanActivate {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
    private readonly meta: Reflector,
  ) {}

  async canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();
    const user = req.user;
    const roles = this.meta.get('auth', context.getHandler());
    if (roles instanceof Array) {
      return !!user && (!roles.length || roles.includes(user.role));
    } else {
      return true;
    }
  }
}
