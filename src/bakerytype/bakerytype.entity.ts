import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { AppEntity } from "src/app.entity";

@Entity({
    name: "bakerytype",
})
export class BakeryTypeEntity extends AppEntity {

}
