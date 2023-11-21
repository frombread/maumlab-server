import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {Question} from "./question.entity";
import {QuestionService} from "./question.service";
import {CreateQuestionInput, UpdateQuestionInput} from "./question.dto";


@Resolver(()=>Question)
export class QuestionResolver {
    constructor(private questionService:QuestionService) {
    }
    @Query(()=>[Question])
    async findAllQuestion(){
        return this.questionService.findAll();
    }
    @Query(()=>Question,{nullable:true})
    async findQuestion(@Args('id')id:number){
        return this.questionService.findOne(id);
    }
    @Mutation(()=>Question)
    async createQuestion(@Args('inputQuestion')inputQuestion:CreateQuestionInput){
        return this.questionService.createQuestion(inputQuestion);
    }
    @Mutation(()=>Question)
    async updateQuestion(@Args('id')id:number , @Args('inputQuestion')inputQuestion:UpdateQuestionInput){
        return this.questionService.update(id,inputQuestion);
    }

    @Mutation(()=>Boolean)
    async deleteQuestion(@Args('id')id:number){
        await this.questionService.remove(id);
        return true;
    }
}
