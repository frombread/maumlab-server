import {Args, ID, Int, Mutation, Query, Resolver} from '@nestjs/graphql';
import { Option } from './option.entity';
import { OptionService } from './option.service';  // OptionService import 추가
import { QuestionService } from '../question/question.service';
import {isNumber} from "@nestjs/common/utils/shared.utils";
import {CreateOptionInput, UpdateOptionInput} from "./option.dto";

@Resolver(() => Option)
export class OptionResolver {
    constructor(
        private readonly optionService: OptionService,  // OptionService 주입
        private readonly questionService: QuestionService,
    ) {}

    @Mutation(() => Option)
    async createOption(
        @Args('createOptionInput') createOptionInput: CreateOptionInput,
    ): Promise<Option> {
        const question = await this.questionService.findOne(createOptionInput.questionId);
        return this.optionService.createOption(createOptionInput,question);
    }

    @Query(()=>Option)
    async Option(@Args('id',{ type: () => Int })id:number){
        return this.optionService.findOne(id);
    }

    @Query(()=>[Option])
    async Options(){
        return this.optionService.findAll();
    }
    @Mutation(()=>Option)
    async updateOption(@Args('id',{ type: () => Int })id:number, @Args('updateOptionInput')updateOptionInput:UpdateOptionInput ){
        const question = await this.questionService.findOne(updateOptionInput.questionId);
        return this.optionService.updateOption(id,updateOptionInput,question);
    }
    @Mutation(()=>Boolean)
    async deleteOption(@Args('id',{ type: () => Int })id:number){
        return this.optionService.deleteOption(id);
    }
}
