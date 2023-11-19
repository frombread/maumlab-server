import {Module} from "@nestjs/common";
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver} from "@nestjs/apollo";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Question} from "./question.entity";

@Module({
    imports:[
        TypeOrmModule.forFeature([Question]),
        GraphQLModule.forRoot({
            autoSchemaFile:true,
            driver: ApolloDriver,
        }),
    ],
    providers:[Question],
})
export class QuestionModule {}