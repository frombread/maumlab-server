import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateSurveyInput {
    @Field()
    title: string;
}
