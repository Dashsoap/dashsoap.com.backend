import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class UserEntity extends BaseEntity{
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
        default:""
    })
    phoneNumber:string;

    @Column({
        enum:['0','1'],
        default:'0'
    })
    gender:"1"|"0";
}