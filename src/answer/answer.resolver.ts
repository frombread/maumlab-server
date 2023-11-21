// answer.resolver.ts
import {Args, ID, Int, Mutation, Query, Resolver} from '@nestjs/graphql';
import { Answer } from './answer.entity';
import { AnswerService } from './answer.service';



@Resolver(() => Answer)
export class AnswerResolver {
    constructor(private readonly answerService: AnswerService) {}

    @Query(() => [Answer])
    async answers(): Promise<Answer[]> {
        return this.answerService.findAll();
    }
    @Query(() => Answer)
    async answer(@Args('id', { type: () => Int }) id: number): Promise<Answer> {
        return this.answerService.findOne(id);
    }

    @Mutation(() => Answer)
    async createAnswer(
        @Args('surveyId', { type: () => Int }) surveyId: number,
        @Args('questionId', { type: () => Int }) questionId: number,
        @Args('optionId', { type: () => Int }) optionId: number,
        @Args('userId', { type: () => Int }) userId: number,
    ): Promise<Answer> {
        return this.answerService.create(surveyId, questionId, optionId, userId);
    }

    @Mutation(() => Answer)
    async updateAnswer(
        @Args('id', { type: () => Int }) id: number,
        @Args('userId', { type: () => Int, nullable: true }) userId: number,
        @Args('surveyId', { type: () => Int, nullable: true }) surveyId: number,
        @Args('questionId', { type: () => Int, nullable: true }) questionId: number,
        @Args('optionId', { type: () => Int, nullable: true }) optionId: number
    ): Promise<Answer> {
        return this.answerService.update(id, userId, surveyId, questionId, optionId);
    }
    @Mutation(() => Boolean)
    async deleteAnswer(@Args('id',{ type: () => Int })id:number){
        await this.answerService.remove(id);
        return true;
    }



}
