import {Injectable, NotFoundException} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository} from "typeorm";
import {CreateSurveyInput, UpdateSurveyInput} from "./survey.dto";
import { Survey } from "./survey.entity";
import {Question} from "../question/question.entity";

@Injectable()
export class SurveyService {
    constructor(
        @InjectRepository(Survey)
        private surveyRepository: Repository<Survey>,
        @InjectRepository(Question)
        private questionRepository:Repository<Question>,
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

    // 질문과 설문지 관계 설정
    async addQuestionToSurvey(surveyId: number, questionId: number): Promise<Survey> {
        const survey = await this.surveyRepository.findOne({ where: { id: surveyId }, relations: ['questions'] });
        if (!survey) {
            throw new NotFoundException(`Survey with ID ${surveyId} not found`);
        }

        const question = await this.questionRepository.findOne({ where: { id: questionId } });
        if (!question) {
            throw new NotFoundException(`Question with ID ${questionId} not found`);
        }

        survey.questions = [...survey.questions, question];
        return this.surveyRepository.save(survey);
    }
}
