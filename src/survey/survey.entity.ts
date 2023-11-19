// 엔터티 클래스에서 GraphQL 타입 정의
import {ObjectType, Field, ID} from "@nestjs/graphql";
import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany} from "typeorm";
import {Question} from "../question/question.entity";
import {Answer} from "../answer/answer.entity";

@ObjectType()
@Entity({ schema: 'mindDB' })
export class Survey {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    title: string;

    @ManyToMany(() => Question, question => question.surveys)
    @JoinTable()
    questions: Question[];

    @OneToMany(() => Answer, answer => answer.survey)
    answers: Answer[];
}
