import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository} from "typeorm";
import {CreateSurveyInput, UpdateSurveyInput} from "./survey.dto";
import { Survey } from "./survey.entity";

@Injectable()
export class SurveyService {
    constructor(
        @InjectRepository(Survey)
        private surveyRepository: Repository<Survey>,
    ) {}

    async findAll(){
        return await this.surveyRepository.find();
    }
    async findOne(id: number) {
        return await this.surveyRepository.findOne({where :{ id }});
    }

    async createSurvey(createSurveyInput: CreateSurveyInput): Promise<Survey> {
        const { title } = createSurveyInput;
        const survey = this.surveyRepository.create({ title });

        return this.surveyRepository.save(survey);
    }
    async update(id: number, updateSurveyInput: UpdateSurveyInput) {
        const { title }= updateSurveyInput;
        const survey = await this.surveyRepository.findOne({where: {id}});
        survey.title = title;
        return this.surveyRepository.save(survey);
    }

    async remove(id:number){
        return await this.surveyRepository.delete(id);
    }
}
