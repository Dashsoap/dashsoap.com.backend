import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

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
}