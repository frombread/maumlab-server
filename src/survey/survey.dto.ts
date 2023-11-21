import {InputType, Field, ID} from '@nestjs/graphql';

@InputType()
export class CreateSurveyInput {
    @Field()
    title: string;
}

@InputType()
export class UpdateSurveyInput {
    @Field(() => ID)
    id: number;

    @Field({ nullable: true })
    title?: string;

}
