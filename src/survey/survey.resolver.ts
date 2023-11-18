import {Query, Resolver} from "@nestjs/graphql";
import {Survey} from "./entities/survet.entity";

@Resolver(()=>Survey)
export class SurveyResolver{
    // @Query(() => [Survey])
    @Query(() => String)
    sayHello(): string {
        return 'Hello from SurveyResolver!';
    }

}