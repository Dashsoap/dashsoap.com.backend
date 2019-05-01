import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from "typeorm";
import { UserEntity } from "src/user/user.entity";
import { AppEntity } from "src/app.entity";
// import { UserEntity } from "src/user/user.entity";
@Entity(
    { name: "Address", }
)
export class AddressEntity extends AppEntity {

    @Column({
        length: 20,
        unique: true,
    })
    addressname: string;

    @Column({
    })
    phone: number;

    @Column({
        length: 20,
    })
    province: string;

    @Column({
        length: 20,
    })
    city: string;

    @Column({
        length: 20,
    })
    area: string;

    @Column({
        length: 20,
    })
    street: string;

    @Column({
        length: 80,
    })
    detail: string;

    @Column({
        default: false
    })
    isDefault: boolean;

    @ManyToOne(type => UserEntity, user => user.addresses)
    user: UserEntity
}