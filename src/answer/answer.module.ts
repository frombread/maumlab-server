import {Module} from "@nestjs/common";
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver} from "@nestjs/apollo";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Answer} from "./answer.entity";
import { AnswerResolver } from './answer.resolver';



@Module({
    imports:[
        TypeOrmModule.forFeature([Answer]),

    ],
    providers:[Answer, AnswerResolver],
})
export class AnswerModule {}