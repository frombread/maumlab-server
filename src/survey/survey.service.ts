import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Survey} from "./survey.entity";
import {Repository} from "typeorm";
import {CreateSurveyInput} from "./dto/create-survey.dto";


@Injectable()
export class SurveyService{
    constructor(@InjectRepository(Survey)
    private surveyRepository: Repository<Survey>) {}

    async createSurvey(input: CreateSurveyInput ){
        const survey = this.surveyRepository.create(input);
        return this.surveyRepository.save(survey);
    }
}