import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateQuestionInput {
    @Field()
    content: string;
}
@InputType()
export class UpdateQuestionInput {
    @Field({ nullable: true })
    content?: string;
}
