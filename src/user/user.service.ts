import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { createUserVo } from './user.vo';

@Injectable()
export class UserService {
  async getAllUser() {
    return await UserEntity.find();
  }
  async getOneUser(username: string) {
    return UserEntity.findOne({
      where: {
        username,
      },
    });
  }
  createUser(vo: createUserVo) {
    const user = new UserEntity();
    user.username = vo.username;
    user.password = vo.password;
    return user.save();
  }
}
