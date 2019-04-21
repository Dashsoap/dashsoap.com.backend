import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from "typeorm";
@Entity()
export class OrderEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        enum:["未付款","已付款","已发货","已收货","已完成"],
        default:"未付款"
    })
    status:"未付款"|"已付款"|"已发货"|"已收货"|"已完成"
}