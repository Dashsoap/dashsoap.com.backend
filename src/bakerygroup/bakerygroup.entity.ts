import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { AppEntity } from "src/app.entity";

@Entity({
    name: "BakeryGroup",
})
export class BakeryGroupEntity extends AppEntity {

}
