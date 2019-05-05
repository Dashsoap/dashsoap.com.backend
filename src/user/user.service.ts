import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { createUserVo } from './user.vo';
import { DeepPartial, Connection, } from 'typeorm';
import { CartEntity } from 'src/cart/cart.entity';
import { async } from 'rxjs/internal/scheduler/async';

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
  async createUser(vo: createUserVo) {
    const user = new UserEntity();
    const cart = new CartEntity();
    user.username = vo.username;
    user.password = vo.password;
    cart.name = vo.username;
    await cart.save()
    user.cart = cart;
    return user.save();
  }
  updateUser(id: number, vo) {
    console.log(vo);
    return UserEntity.update(id, vo);
  }

}
