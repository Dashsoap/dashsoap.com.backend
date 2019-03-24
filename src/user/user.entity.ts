import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { resolveSoa } from "dns";

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;
    @Column({
        length: 20,
        unique:true,
    })
    username:string;
    @Column({
        length: 256,
    })
    password:string;
    @Column({
        enum:["VIP","ADMIN","PUBLIC"],
        default:"PUBLIC"
    })
    role:"VIP"|"ADMIN"|"PUBLIC"
}