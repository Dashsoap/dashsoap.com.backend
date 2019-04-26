import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from "typeorm";
import { AppEntity } from "src/app.entity";

@Entity({ name: "Order" })
export class OrderEntity extends AppEntity {

    @Column({
        enum: ["未付款", "已付款", "已发货", "已收货", "已完成"],
        default: "未付款"
    })
    status: "未付款" | "已付款" | "已发货" | "已收货" | "已完成"
}