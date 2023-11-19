import {Query, Resolver} from '@nestjs/graphql';
import {Answer} from "./answer.entity";

@Resolver(()=>Answer)
export class AnswerResolver {
    @Query(() => String)
    hello(): string {
        return 'Hello, GraphQL!';
    }
}
