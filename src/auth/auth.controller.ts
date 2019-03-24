import { Controller, Post, Body, Put, HttpException, UseFilters, BadGatewayException } from '@nestjs/common';
import { LoginDto, RegisterDto } from './auth.dto';
import { UserService } from 'src/user/user.service';
import { AppException, AppExceptionMap } from 'src/app.exption';

@Controller('auth')
export class AuthController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async login(@Body() body: LoginDto) {
    const user = await this.userService.getOneUser(body.username);
    if (!user) {
      throw new AppException(AppExceptionMap.USER_NOT_FOUND)
    } else {
      if (user.password === body.password) {
        return{
            code:0,
            body:{
                ...user
            }
        }
      } else {
        throw new AppException(AppExceptionMap.PASSWROD_ERROR)
      }
    }
  }
  @Put()
  async register(@Body() body: RegisterDto) {
    const user = await this.userService.getOneUser(body.username);
    if (user) {
      throw new AppException(AppExceptionMap.USER_ALREADY_EXIST)
    }
    else{
        return await this.userService.createUser(body);
    }
  }
}
