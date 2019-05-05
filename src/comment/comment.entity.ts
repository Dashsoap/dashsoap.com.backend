import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, OneToOne, ManyToOne } from "typeorm";
import { AppEntity } from "src/app.entity";
import { UserEntity } from "src/user/user.entity";

@Entity({
    name: "Comment",
})
export class CommentEntity extends AppEntity {

    @Column({
        length: 200
    })
    content: string;

    @ManyToOne(type => UserEntity, user => user.comment)
    user: UserEntity
}
