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
    @Column({
        length:20,
        default:""
    })
    nickname:string;
    @Column({
        length:16,
    })
    phoneNumber:number;
    @Column({
        enum:['0',1],
    })
    gender:"1"|"0";
}