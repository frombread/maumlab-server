import {Module} from "@nestjs/common";
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver} from "@nestjs/apollo";
import {SurveyResolver} from "./survey.resolver";
import {Survey} from "./entities/survet.entity";
import {TypeOrmModule} from "@nestjs/typeorm";


@Module({
    imports:[
        TypeOrmModule.forFeature([Survey]),
        GraphQLModule.forRoot({
            autoSchemaFile:true,
            driver: ApolloDriver,
        }),
    ],
    providers:[SurveyResolver,Survey],
})
export class SurveyModule {}