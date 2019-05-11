import { Injectable } from '@nestjs/common';
import { AddressEntity } from './address.entity';
import { UserEntity } from 'src/user/user.entity';

@Injectable()
export class AddressService {
    async createAddress(body, id) {

        const address = new AddressEntity();
        const user = await UserEntity.findOne(id)
        address.addressname = body.addressname;
        address.phone = body.phone;
        address.province = body.province
        address.city = body.city
        address.area = body.area
        address.street = body.street
        address.detail = body.detail
        address.isDefault = body.isDefault
        address.user = user
        return address.save()

    }
    async getUserAddress(id) {
        const a = await UserEntity.findOne({
            where: {
                id: id
            },
            relations: ["addresses"]
        })
        return a.addresses

    }
    async getOneAddress(id: any) {
        const a = await AddressEntity.findOne({
            where: {
                id: id
            }
        })

        return a
    }
    async updateAddress(id, data) {

        console.log(await AddressEntity.update({
            id: id
        }, data));


    }
    async deleAddress(id) {
        const cartdetail = await AddressEntity.findOne(id)
        console.log(cartdetail);

        if (cartdetail) {
            const a = await AddressEntity.delete(id)
            return a
        } else {
            return { "code": 2 }
        }
    }
}
