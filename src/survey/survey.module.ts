import {Module} from "@nestjs/common";
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver} from "@nestjs/apollo";
import {SurveyResolver} from "./survey.resolver";
import {Survey} from "./survey.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {SurveyService} from "./survey.service";
import {Question} from "../question/question.entity";
import {Option} from "../option/option.entity";
import {Answer} from "../answer/answer.entity";
import {User} from "../user/user.entity";


@Module({
    imports:[
        TypeOrmModule.forFeature([Survey,Question,Option,Answer,User]),
        GraphQLModule.forRoot({
            autoSchemaFile:true,
            driver: ApolloDriver,
        }),
    ],
    providers:[SurveyResolver,Survey,SurveyService],
})
export class SurveyModule {}