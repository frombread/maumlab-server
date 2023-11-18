import {Query, Resolver} from "@nestjs/graphql";

@Resolver(()=>Survey)
export class SurveyResolver{
    @Query(() => [Survey])

}