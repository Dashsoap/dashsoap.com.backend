import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BakeryService } from './bakery.service';

@Controller('bakery')
export class BakeryController {
    constructor(private readonly bakeryService: BakeryService) { }

    @Get()
    async getAllbakery() {
        return await this.bakeryService.getAllBakery()
    }

    @Post()
    async addBakery(@Body() body) {
        return await this.bakeryService.createBakery(body)
    }
    @Get(":id")
    async getBakery(@Param() param) {
        return await this.bakeryService.getBakery(param.id)
    }
}
