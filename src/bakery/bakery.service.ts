import { Injectable } from '@nestjs/common';
import { BakeryEntity } from './bakery.entity';
import { DeepPartial } from 'typeorm';

@Injectable()
export class BakeryService {
    async getAllBakery() {
        return await BakeryEntity.find();
    }

    async createBakery(vo) {
        const bakery = new BakeryEntity();
        for (var i in vo) {
            bakery[i] = vo[i];
        }
        return bakery.save();
    }

    async getBakery(id) {
        return await BakeryEntity.findOne(id)
    }
}
