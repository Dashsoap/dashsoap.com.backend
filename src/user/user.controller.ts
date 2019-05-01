import { Controller, Get, Put, Body } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';
import { AuthUser } from 'src/app.decorator';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Get()
    async getAllUser() {
        return await this.userService.getAllUser()
    }
    @Put()
    async updateUser(@Body() body, @AuthUser() user) {
        return await this.userService.updateUser(user.id, body)
    }
}
