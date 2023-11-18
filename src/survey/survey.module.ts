import {Module} from "@nestjs/common";
import {GraphQLModule} from "@nestjs/graphql";
import {SurveyResolver} from "./survey.resolver";

@Module({
    imports:[
        GraphQLModule.forRoot({
            autoSchemaFile:true,
        }),
    ],
    providers:[SurveyResolver],
})
export class SurveyModule {}