import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
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
        return this.optionService.createOption(createOptionInput.content, createOptionInput.score, question);
    }

    @Query(()=>Option)
    async findOneOption(@Args('id')id:number){
        return this.optionService.findOne(id);
    }

    @Query(()=>[Option])
    async findAllOption(){
        return this.optionService.findAll();
    }
    @Mutation(()=>Option)
    async updateOption(@Args('id')id:number, updateOptionInput:UpdateOptionInput ){


    }
}
