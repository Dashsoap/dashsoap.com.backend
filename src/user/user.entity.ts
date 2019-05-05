import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { AddressEntity } from "src/address/address.entity";
import { AppEntity } from "src/app.entity";
import { CommentEntity } from "src/comment/comment.entity";
import { CartEntity } from "src/cart/cart.entity";
import { OrderEntity } from "src/order/order.entity";
import { BakeryEntity } from "src/bakery/bakery.entity";

@Entity({
    name: "User"
})
export class UserEntity extends AppEntity {

    @Column({
        length: 20,
        unique: true,
    })
    username: string;

    @Column({
        length: 256,
    })
    password: string;

    @Column({
        enum: ["VIP", "ADMIN", "PUBLIC"],
        default: "PUBLIC"
    })
    role: "VIP" | "ADMIN" | "PUBLIC"

    @Column({
        length: 20,
        default: ""
    })
    nickname: string;

    @Column({
        length: 16,
        default: ""
    })
    phoneNumber: string;

    @Column({
        enum: ['0', '1'],
        default: '0'
    })
    gender: "1" | "0";

    /* 用户多个 Address */
    @OneToMany(type => AddressEntity, addresses => addresses.user)
    addresses: AddressEntity[]

    /* 用户多个评论 */
    @OneToMany(type => CommentEntity, comment => comment.user)
    comment: CommentEntity[]

    /* 一个用户一个购物车 */
    @OneToOne(type => CartEntity, cart => cart.user, {
        cascade: true
    })
    @JoinColumn()
    cart: CartEntity;

    /* 用户多个订单 */
    @OneToMany(type => OrderEntity, order => order.user)
    order: OrderEntity[]

    /* 用户的喜欢 */
    // @OneToMany(type => BakeryEntity, bakery => bakery)
    // favorite: BakeryEntity[]
    // @Column(
    //     "VIPleft"
    // )
    // VIPleft: Date
}