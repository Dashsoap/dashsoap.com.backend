import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { createUserVo } from './user.vo';

@Injectable()
export class UserService {
  async getAllUser() {
    return await User.find();
  }
  async getOneUser(username: string) {
    return User.findOne({
      where: {
        username,
      },
    });
  }
  createUser(vo: createUserVo) {
    const user = new User();
    user.username = vo.username;
    user.password = vo.password;
    return user.save();
  }
}
