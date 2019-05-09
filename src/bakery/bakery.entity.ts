import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne } from "typeorm";
import { AppEntity } from "src/app.entity";
import { type } from "os";
import { BakeryTypeEntity } from "src/bakerytype/bakerytype.entity";

@Entity({
    name: "Bakery",
})
export class BakeryEntity extends AppEntity {
    @Column({
        length: 20
    })
    name: string;

    @Column({
        length: 2000,
        default: 'Wow delicious!'
    })
    discreption: string;

    /* 保质期 单位为天 */
    @Column()
    freshkeeping: number;

    /* 销售数量 */
    @Column({
        default: 99
    })
    sales: number

    /* 余量 */
    @Column({
        default: 99
    })
    remainder: number;

    /* 重量 单位为克 */
    @Column()
    weight: number

    @Column()
    price: number;

    @Column()
    priceVip: number;

    @Column({
        default: ''
    })
    picture: string;

    @Column({
        default: ''

    })
    detailpic1: string;

    @Column({
        default: ''
    })
    detailpic2: string;

    @ManyToOne(type => BakeryTypeEntity, bakerytype => bakerytype.bakery)
    type: BakeryTypeEntity
}
