import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Question } from './question.entity';
import { QuestionService } from './question.service';

@Resolver(() => Question)
export class QuestionResolver {
    constructor(private questionService: QuestionService) {}

    @Query(() => [Question])
    async questions(): Promise<Question[]> {
        return this.questionService.findAll();
    }

    @Query(() => Question)
    async question(@Args('id', { type: () => Int }) id: number): Promise<Question> {
        return this.questionService.findOne(id);
    }

    @Mutation(() => Question)
    async createQuestion(
        @Args('content') content: string,
    ): Promise<Question> {
        return this.questionService.create({content});
    }

    @Mutation(() => Question)
    async updateQuestion(
        @Args('id', { type: () => Int }) id: number,
        @Args('content', { type: () => String }) content: string,
    ): Promise<Question> {
        return this.questionService.update(id, { content });
    }


    @Mutation(() => Boolean)
    async deleteQuestion(@Args('id', { type: () => Int }) id: number): Promise<boolean> {
        await this.questionService.remove(id);
        return true;
    }
}