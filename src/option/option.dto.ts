
import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateOptionInput {
    @Field()
    content: string;

    @Field()
    score: number;

    @Field(() => ID)
    questionId: number;
}
@InputType()
export class UpdateOptionInput {
    @Field({ nullable: true })
    content?: string;

    @Field({ nullable: true })
    score?: number;
}
