import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Question} from "./question.entity";
import { QuestionResolver } from './question.resolver';

@Module({
    imports:[
        TypeOrmModule.forFeature([Question]),
    ],
    providers:[Question, QuestionResolver],
})
export class QuestionModule {}