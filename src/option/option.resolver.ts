import {Query, Resolver} from '@nestjs/graphql';
import {Option} from "./option.entity";

@Resolver(()=>Option)
export class OptionResolver {
    @Query(() => String)
    hello(): string {
        return 'Hello, GraphQL!';
    }
}
