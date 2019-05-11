import { Controller, Post, Body, Get, Param, Query, Put } from '@nestjs/common';
import { AddressService } from './address.service';
import { async } from 'rxjs/internal/scheduler/async';

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
    async getUserAddress(@Query() param) {
        console.log(param);

        return await this.addressService.getUserAddress(param.userId)
    }
    @Get('/address')
    async getOneAddress(@Query() Param) {
        console.log(Param.addressId);

        return await this.addressService.getOneAddress(Param.addressId)
    }
    @Put()
    async updataAddress(@Body() body) {
        return await this.addressService.updateAddress(body.id, body.data)
    }
    @Put('dele')
    async deleBakery(@Body() body) {
        return await this.addressService.deleAddress(body.id)
    }

}
