import {Injectable, NotFoundException} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Answer} from "./answer.entity";
import {Repository} from "typeorm";
import {Question} from "../question/question.entity";
import {Survey} from "../survey/survey.entity";
import {Option} from "../option/option.entity";
import {User} from "../user/user.entity";

@Injectable()
export class AnswerService {
    constructor(
        @InjectRepository(Answer)
        private answerRepository: Repository<Answer>,
        @InjectRepository(Survey)
        private surveyRepository: Repository<Survey>,
        @InjectRepository(Question)
        private questionRepository: Repository<Question>,
        @InjectRepository(Option)
        private optionRepository:Repository<Option>,
        @InjectRepository(User)
        private userRepository:Repository<User>
    ) {}

    async create(surveyId: number, questionId: number, optionId: number, userId: number): Promise<Answer> {
        const survey = await this.surveyRepository.findOne({ where: { id: surveyId } });
        if (!survey) {
            throw new NotFoundException(`Survey with ID ${surveyId} not found`);
        }

        const question = await this.questionRepository.findOne({ where: { id: questionId } });
        if (!question) {
            throw new NotFoundException(`Question with ID ${questionId} not found`);
        }

        const option = await this.optionRepository.findOne({ where: { id: optionId } });
        if (!option) {
            throw new NotFoundException(`Option with ID ${optionId} not found`);
        }

        const user = await this.userRepository.findOne({ where: { id: userId } });
        if (!user) {
            throw new NotFoundException(`User with ID ${userId} not found`);
        }

        const answer = this.answerRepository.create({survey, question, option, user });
        return this.answerRepository.save(answer);
    }
    async findAll(): Promise<Answer[]> {
        return this.answerRepository.find();
    }
    async findOne(id: number): Promise<Answer> {
        const answer = await this.answerRepository.findOne({ where: { id } });
        if (!answer) {
            throw new NotFoundException(`Answer with ID ${id} not found`);
        }
        return answer;
    }

    async update(id: number, userId: number, surveyId: number, questionId: number, optionId: number): Promise<Answer> {
        const answer = await this.answerRepository.findOne({ where: { id } });
        if (!answer) {
            throw new NotFoundException(`Answer with ID ${id} not found`);
        }
        answer.user = await this.surveyRepository.findOne({where: {id: userId}});
        answer.survey = await this.surveyRepository.findOne({where: {id: surveyId}});
        answer.question = await this.questionRepository.findOne({where:{id:questionId}});
        answer.option = await this.optionRepository.findOne({where:{id :optionId}});

        return this.answerRepository.save(answer);
    }


    async remove(id: number): Promise<void> {
        const result = await this.answerRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Answer with ID ${id} not found`);
        }
    }

}
