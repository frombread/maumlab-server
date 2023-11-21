import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Option} from './option.entity';
import {UpdateOptionInput} from "./option.dto";
import {Question} from "../question/question.entity";


@Injectable()
export class OptionService {
    constructor(
        @InjectRepository(Option)
        private readonly optionRepository: Repository<Option>,
    ) {}

    async createOption(content: string, score: number, question: Question): Promise<Option> {
        const option = this.optionRepository.create({ content, score, question });
        return this.optionRepository.save(option);
    }


    async findAll(): Promise<Option[]> {
        return this.optionRepository.find();
    }
    async findOne(id: number): Promise<Option> {
        return await this.optionRepository.findOne({where: {id}});
    }

    async updateOption(id: number, content: string, score: number, question: Question): Promise<Option> {
        const option = await this.optionRepository.findOne({where : {id}});
        option.content = content;
        option.score = score;
        option.question =question;
        return this.optionRepository.save(option);
    }

    async deleteOption(id: number): Promise<void> {
        const option = await this.optionRepository.findOne({where : {id}});
        await this.optionRepository.remove(option);
    }
}
