import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { AppEntity } from "src/app.entity";

@Entity({
    name: "Comment",
})
export class CommentEntity extends AppEntity {

}
