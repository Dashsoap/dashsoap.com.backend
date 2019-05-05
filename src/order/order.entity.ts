import { Entity, Column, OneToOne, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { AppEntity } from "src/app.entity";
import { UserEntity } from "src/user/user.entity";
import { AddressEntity } from "src/address/address.entity";

@Entity({ name: "Order" })
export class OrderEntity extends AppEntity {
    @ManyToOne(type => UserEntity, user => user.order)
    user: UserEntity;

    @ManyToOne(type => AddressEntity, address => address.order)
    address: AddressEntity

    @Column({
        enum: ["未付款", "已付款", "已发货", "已收货", "已完成"],
        default: "未付款"
    })
    status: "未付款" | "已付款" | "已发货" | "已收货" | "已完成"
}