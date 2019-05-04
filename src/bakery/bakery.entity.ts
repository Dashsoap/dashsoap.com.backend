import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { AppEntity } from "src/app.entity";

@Entity({
    name: "bakery",
})
export class BakeryEntity extends AppEntity {

}
