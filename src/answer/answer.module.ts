import {Module} from "@nestjs/common";
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver} from "@nestjs/apollo";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Answer} from "./answer.entity";
import { AnswerResolver } from './answer.resolver';
import {AnswerService} from "./answer.service";



@Module({
    imports:[
        TypeOrmModule.forFeature([Answer]),

    ],
    providers:[Answer, AnswerResolver,AnswerService],
})
export class AnswerModule {}