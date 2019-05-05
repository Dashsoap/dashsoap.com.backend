import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, OneToOne } from "typeorm";
import { AppEntity } from "src/app.entity";
import { BakeryEntity } from "src/bakery/bakery.entity";

@Entity({
    name: "BakeryType",
})
export class BakeryTypeEntity extends AppEntity {
    @Column({
        length: 20,
    })
    name: string

    @OneToMany(type => BakeryEntity, bakery => bakery.type)
    bakery: BakeryEntity[];

}
