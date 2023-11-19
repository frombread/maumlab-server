// app.resolver.ts

import { Resolver, Query } from '@nestjs/graphql';

@Resolver('Query')
export class AppResolver {
    @Query(() => String)
    hello(): string {
        return 'Hello, GraphQL!';
    }
}
