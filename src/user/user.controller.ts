import { Controller, Get, Put, Body } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';
import { AuthUser, Auth } from 'src/app.decorator';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Auth('ADMIN')
    @Get()
    async getAllUser() {
        return await this.userService.getAllUser()
    }
    @Get('profile')
    async getUserProfile(@Body() body) {
        return await this.userService.getUserProfile(body.id)
    }
    @Put()
    async updateUser(@Body() body, @AuthUser() user) {
        return await this.userService.updateUser(user.id, body)
    }
}
