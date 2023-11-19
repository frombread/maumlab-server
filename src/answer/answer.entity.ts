
import {Entity, PrimaryGeneratedColumn, ManyToOne, Column} from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import {Survey} from "../survey/survey.entity";
import {Question} from "../question/question.entity";
import {Option} from "../option/option.entity";
import {User} from "../user/user.entity";


@ObjectType()
@Entity()
export class Answer {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;
    // @Field()
    // @Column()
    // created_at : Date

    @Field(() => User)
    @ManyToOne(() => User, user => user.answers, { nullable: false })
    user: User;

    @Field(() => Survey)
    @ManyToOne(() => Survey, survey => survey.answers, { nullable: false })
    survey: Survey;

    @Field(() => Question)
    @ManyToOne(() => Question, question => question.answers, { nullable: false })
    question: Question;

    @Field(() => Option)
    @ManyToOne(() => Option, option => option.answers, { nullable: false })
    option: Option;

}