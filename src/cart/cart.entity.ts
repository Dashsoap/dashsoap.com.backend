import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { AppEntity } from "src/app.entity";

@Entity({
    name: "Cart",
})
export class CartEntity extends AppEntity {

}
