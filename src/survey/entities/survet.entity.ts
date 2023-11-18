// 엔터티 클래스에서 GraphQL 타입 정의
import { ObjectType, Field } from "@nestjs/graphql";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ schema: 'mindDB' })
@ObjectType()
export class Survey {
    @PrimaryGeneratedColumn()
    @Field()
    id: number;

    @Column()
    @Field()
    title: string;
}
