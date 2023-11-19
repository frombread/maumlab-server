import { Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import {Answer} from "../answer/answer.entity";

@ObjectType()
@Entity({ schema: 'mindDB' })
export class User {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Answer, answer => answer.option)
    answers: Answer[];
}
