import { Controller, Get } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}
    @Get()
    async getAllUser(){
        return await this.userService.getAllUser()
    }
}
