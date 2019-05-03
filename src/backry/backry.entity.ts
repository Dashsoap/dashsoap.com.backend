import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from "typeorm";
import { AppEntity } from "src/app.entity";
// import { UserEntity } from "src/user/user.entity";
@Entity(
    { name: "Backry", }
)
export class AddressEntity extends AppEntity {

}