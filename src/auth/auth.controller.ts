import {
  Controller,
  Post,
  Body,
  Put,
  Headers,
  Get,
  ForbiddenException,
  Request,
} from '@nestjs/common';
import { LoginDto, RegisterDto } from './auth.dto';
import { UserService } from 'src/user/user.service';
import { AppException, AppExceptionMap } from 'src/app.exption';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';
import { Auth, AuthUser } from 'src/app.decorator';
import { UserEntity } from 'src/user/user.entity';
@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) { }
  @Get()
  // @Auth()
  async me(@AuthUser() user: UserEntity) {
    return user;
  }

  @Post()
  async login(@Body() body: LoginDto) {
    const user = await this.userService.getOneUser(body.username);
    if (!user) {
      throw new AppException(AppExceptionMap.USER_NOT_FOUND);
    } else {
      if (await bcrypt.compare(body.password, user.password)) {
        return this.authService.sighJwt(user);
      } else {
        throw new AppException(AppExceptionMap.PASSWROD_ERROR);
      }
    }
  }
  @Put()
  async register(@Body() body: RegisterDto) {
    const user = await this.userService.getOneUser(body.username);
    if (user) {
      throw new AppException(AppExceptionMap.USER_ALREADY_EXIST);
    } else {
      body.password = await bcrypt.hash(body.password, 3);
      return await this.userService.createUser(body);
    }
  }
}
