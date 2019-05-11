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
        return AddressEntity.find({
            where: { userId: id },
        })
    }
}
