import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { AppEntity } from "src/app.entity";

@Entity({
    name: "Bakery",
})
export class BakeryEntity extends AppEntity {
    @Column({
        length: 20
    })
    name: string;

    @Column({
        length: 20,
    })
    discreption: string;

    /* 保质期 单位为天 */
    @Column()
    freshkeeping: number;

    /* 销售数量 */
    @Column({
        default: 99
    })
    sales: number

    /* 余量 */
    @Column({
        default: 99
    })
    remainder: number;

    /* 重量 单位为克 */
    @Column()
    weight: number

    @Column()
    price: number;

    @Column()
    priceVip: number;
}
