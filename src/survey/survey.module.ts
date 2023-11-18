import {Module} from "@nestjs/common";
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver} from "@nestjs/apollo";
import {SurveyResolver} from "./survey.resolver";
import {Survey} from "./entities/survet.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {SurveyService} from "./survey.service";


@Module({
    imports:[
        TypeOrmModule.forFeature([Survey]),
        GraphQLModule.forRoot({
            autoSchemaFile:true,
            driver: ApolloDriver,
        }),
    ],
    providers:[SurveyResolver,Survey,SurveyService],
})
export class SurveyModule {}