import {Args, Int, Mutation, Query, Resolver} from "@nestjs/graphql";
import {Survey} from "./survey.entity";
import {CreateSurveyInput, UpdateSurveyInput} from "./survey.dto";
import {SurveyService} from "./survey.service";

@Resolver(()=>Survey)
export class SurveyResolver{
    constructor(private surveyService: SurveyService) {
    }

    @Query(() => [Survey])
    async findAllSurveys(): Promise<Survey[]> {
        return this.surveyService.findAll();
    }

    @Query(() => Survey, { nullable: true })
    async findSurvey(@Args('id') id: number): Promise<Survey | undefined> {
        return this.surveyService.findOne(id);
    }
    @Mutation(()=>Survey)
    async createSurvey(@Args('input')input : CreateSurveyInput){
        return this.surveyService.createSurvey(input);
    }

    @Mutation(()=>Survey)
    async updateSurvey(@Args('id') id: number,@Args('input')input:UpdateSurveyInput){
        return this.surveyService.update(id, input);
    }

    @Mutation(() => Boolean)
    async deleteSurvey(@Args('id') id: number): Promise<boolean> {
        await this.surveyService.remove(id);
        return true;
    }

    // 질문과 설문지 관계 설정
    @Mutation(() => Survey)
    async addQuestionToSurvey(
        @Args('surveyId', { type: () => Int }) surveyId: number,
        @Args('questionId', { type: () => Int }) questionId: number,
    ): Promise<Survey> {
        return this.surveyService.addQuestionToSurvey(surveyId, questionId);
    }
}