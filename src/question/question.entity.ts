
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import {Survey} from "../survey/survey.entity";
import {Option} from "../option/option.entity";
import {Answer} from "../answer/answer.entity";

@ObjectType()
@Entity({ schema: 'mindDB' })
export class Question {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    content: string;

    @ManyToMany(() => Survey, survey => survey.questions)
    surveys: Survey[];

    @OneToMany(() => Option, option => option.question)
    options: Option[];

    @OneToMany(() => Answer, answer => answer.question)
    answers: Answer[];
}

