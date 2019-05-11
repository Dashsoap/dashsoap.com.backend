import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { AddressService } from './address.service';

@Controller('address')
export class AddressController {
    constructor(private readonly addressService: AddressService) { }

    @Post()
    async createAddress(@Body() body) {
        const data = body.data
        console.log(body);

        const id = body.id
        return await this.addressService.createAddress(data, id)
    }
    @Get()
    async getUserAddress(@Param() param) {
        return await this.addressService.getUserAddress(param.userId)
    }
}
