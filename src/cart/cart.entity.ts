import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, OneToOne, JoinTable, ManyToMany } from "typeorm";
import { AppEntity } from "src/app.entity";
import { UserEntity } from "src/user/user.entity";
import { BakeryEntity } from "src/bakery/bakery.entity";

@Entity({
    name: "Cart",
})
export class CartEntity extends AppEntity {
    @Column()
    name: string

    @OneToOne(type => UserEntity, user => user.cart)
    user: UserEntity

    @ManyToMany(type => BakeryEntity, bakery => bakery.cart)
    bakery: BakeryEntity[]

}
