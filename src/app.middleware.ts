import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user/user.service';
import { AuthService } from './auth/auth.service';

@Injectable()
export class AppMiddleware implements NestMiddleware {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) { }
  async use(req: any, res: any, next: () => void) {
    const token = req.headers.authorization;
    if (token) {
      let payload: any;
      try {
        payload = this.authService.verifyJwt(token);
      } catch (error) {
        // throw new UnauthorizedException();
        next()
        return
      }
      const user = await this.userService.getOneUser(payload.username);
      req.user = user
    }

    next();
  }
}
