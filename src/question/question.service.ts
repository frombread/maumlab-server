import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './question.entity';

@Injectable()
export class QuestionService {
    constructor(
        @InjectRepository(Question)
        private questionRepository: Repository<Question>,
    ) {}

    async findAll(): Promise<Question[]> {
        return this.questionRepository.find();
    }

    async create(data: Partial<Question>): Promise<Question> {
        const question = this.questionRepository.create(data);
        return this.questionRepository.save(question);
    }

    async findOne(id: number): Promise<Question> {
        const question = await this.questionRepository.findOne({ where: { id }});
        if (!question) {
            throw new NotFoundException(`Question with ID ${id} not found`);
        }
        return question;
    }

    async update(id: number, updateData: Partial<Question>): Promise<Question> {
        await this.findOne(id); // Ensure the question exists
        await this.questionRepository.update(id, updateData);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.findOne(id); // Ensure the question exists
        await this.questionRepository.delete(id);
    }
}
