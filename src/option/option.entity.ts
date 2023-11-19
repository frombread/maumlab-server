
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import {Question} from "../question/question.entity";
import {Answer} from "../answer/answer.entity";


@ObjectType()
@Entity()
export class Option {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    content: string;

    @Field()
    @Column()
    score : number;

    @ManyToOne(() => Question, question => question.options)
    question: Question;

    @OneToMany(() => Answer, answer => answer.option)
    answers: Answer[];
}

