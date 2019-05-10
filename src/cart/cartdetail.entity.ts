import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, OneToOne, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import { AppEntity } from "src/app.entity";
import { BakeryEntity } from "src/bakery/bakery.entity";
import { CartEntity } from "./cart.entity";

@Entity({
    name: "Cart_bakery",
})
export class CartDetailEntity extends AppEntity {

    @ManyToOne(type => BakeryEntity, bakery => BakeryEntity, {
        eager: true
    })
    bakery: BakeryEntity

    @ManyToOne(type => CartEntity, cart => CartEntity, {
        eager: true
    })
    cart: CartEntity

    @Column()
    count: number
    cartdetail: CartEntity;
}
