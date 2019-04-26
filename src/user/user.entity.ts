import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { AddressEntity } from "src/address/address.entity";
import { AppEntity } from "src/app.entity";

@Entity({
    name: "User"
})
export class UserEntity extends AppEntity {

    @Column({
        length: 20,
        unique: true,
    })
    username: string;

    @Column({
        length: 256,
    })
    password: string;

    @Column({
        enum: ["VIP", "ADMIN", "PUBLIC"],
        default: "PUBLIC"
    })
    role: "VIP" | "ADMIN" | "PUBLIC"

    @Column({
        length: 20,
        default: ""
    })
    nickname: string;

    @Column({
        length: 16,
        default: ""
    })
    phoneNumber: string;

    @Column({
        enum: ['0', '1'],
        default: '0'
    })
    gender: "1" | "0";

    @OneToMany(type => AddressEntity, address => address.user)
    address: AddressEntity[]
}