import { Injectable } from '@nestjs/common';
import { BakeryEntity } from 'src/bakery/bakery.entity';
import { UserEntity } from 'src/user/user.entity';
import { CartEntity } from './cart.entity';
import { CartDetailEntity } from './cartdetail.entity';

@Injectable()
export class CartService {
    async addBakery(cartId, bakeryId, count) {
        const cartdetail = new CartDetailEntity();
        const cart = await CartEntity.findOne(cartId);
        const bakery = await BakeryEntity.findOne(bakeryId)
        cartdetail.cart = cart;
        cartdetail.bakery = bakery
        cartdetail.count = count
        return cartdetail.save()
    }
    async getBakery(cartId) {
        return await CartDetailEntity.find({
            where: {
                cart: cartId
            }
            // }, relations: ['cart', 'bakery']
        })
    }
}
