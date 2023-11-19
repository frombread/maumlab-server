import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {Survey} from "./survey.entity";
import {CreateSurveyInput} from "./dto/create-survey.dto";
import {SurveyService} from "./survey.service";

@Resolver(()=>Survey)
export class SurveyResolver{
    constructor(private surveyService: SurveyService) {
    }
    @Mutation(()=>Survey)
    async createSurvey(@Args('input')input : CreateSurveyInput){
        return this.surveyService.createSurvey(input);
    }

}