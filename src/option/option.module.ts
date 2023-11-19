import {Module} from "@nestjs/common";
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver} from "@nestjs/apollo";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Option} from "./option.entity";


@Module({
    imports:[
        TypeOrmModule.forFeature([Option]),
        GraphQLModule.forRoot({
            autoSchemaFile:true,
            driver: ApolloDriver,
        }),
    ],
    providers:[Option],
})
export class OptionModule {}