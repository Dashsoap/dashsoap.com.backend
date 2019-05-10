import { Controller, Post, Body, Get, Param, Query } from '@nestjs/common';
import { CartService } from './cart.service';
import { async } from 'rxjs/internal/scheduler/async';

@Controller('cart')
export class CartController {
    constructor(private readonly cartService: CartService) { }
    // /**
    // @Params
    // @cartId
    // @bakeryId
    // @count
    // **/
    @Post()
    async addCart(@Body() body) {
        return this.cartService.addBakery(body.cartId, body.bakeryId, body.count)
    }
    @Get()
    async getCart(@Query() param) {
        return await this.cartService.getBakery(param.id)
    }
}
