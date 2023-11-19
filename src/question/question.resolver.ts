import { Resolver } from '@nestjs/graphql';
import {Question} from "./question.entity";

@Resolver(()=>Question)
export class QuestionResolver {}
