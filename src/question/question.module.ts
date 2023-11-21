import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Question} from "./question.entity";
import { QuestionResolver } from './question.resolver';
import {QuestionService} from "./question.service";

@Module({
    imports:[
        TypeOrmModule.forFeature([Question]),
    ],
    providers:[Question, QuestionResolver,QuestionService],
})
export class QuestionModule {}