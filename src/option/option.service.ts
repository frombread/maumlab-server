import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Option} from './option.entity';
import {CreateOptionInput, UpdateOptionInput} from "./option.dto";
import {Question} from "../question/question.entity";


@Injectable()
export class OptionService {
    constructor(
        @InjectRepository(Option)
        private readonly optionRepository: Repository<Option>,
    ) {}

    async create(createOptionInput: CreateOptionInput,question:Question): Promise<Option> {
        const {content,score } =createOptionInput;
        const option = this.optionRepository.create({ content, score, question });
        return this.optionRepository.save(option);
    }


    async findAll(): Promise<Option[]> {
        return this.optionRepository.find();
    }
    async findOne(id: number): Promise<Option> {
        return await this.optionRepository.findOne({where: {id}});
    }

    async update(id: number,updateOptionInput:UpdateOptionInput ,question: Question): Promise<Option> {
        const option = await this.optionRepository.findOne({where : {id}});
        option.content = updateOptionInput.content;
        option.score = updateOptionInput.score;
        option.question =question;
        return this.optionRepository.save(option);
    }

    async remove(id: number): Promise<void> {
        await this.optionRepository.delete(id);
    }
}
