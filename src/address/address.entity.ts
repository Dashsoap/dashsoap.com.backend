import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from "typeorm";
// import { UserEntity } from "src/user/user.entity";
@Entity()
export class AddresEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 20,
        unique:true,
    })
    addressname:string;

    @Column({
    })
    phone:number;

    @Column({
        length: 20,
    })
    province:string;

    @Column({
        length: 20,
    })
    city:string;

    @Column({
        length: 20,
    })
    area:string;

    @Column({
        length: 20,
    })
    street:string;

    @Column({
        length: 80,
    })
    detail:string;
    
    @Column({
         default:false
    })
    isDefault:boolean;
    
}