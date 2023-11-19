import {Module} from "@nestjs/common";
import {SurveyResolver} from "./survey.resolver";
import {Survey} from "./survey.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {SurveyService} from "./survey.service";

@Module({
    imports:[
        TypeOrmModule.forFeature([Survey]),
    ],
    providers:[SurveyResolver,Survey,SurveyService],
})
export class SurveyModule {}