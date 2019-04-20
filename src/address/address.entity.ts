import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
@Entity()
export class AddresEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

}