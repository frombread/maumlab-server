import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {SurveyModule} from "./survey/survey.module";
import {TypeOrmModule} from "@nestjs/typeorm";

import {Survey} from "./survey/survey.entity";
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver} from "@nestjs/apollo";
import {UserModule} from "./user/user.module";
import {OptionModule} from "./option/option.module";
import {AnswerModule} from "./answer/answer.module";
import {QuestionModule} from "./question/question.module";


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: '1234',
      database: 'minddb',
      synchronize: true,
      entities: [__dirname + '/**/**/*.entity{.ts,.js}'],
    }),
    // GraphQLModule.forRoot({
    //   autoSchemaFile:true,
    //   driver: ApolloDriver,
    // }),
    SurveyModule,UserModule,OptionModule,AnswerModule,QuestionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
// 시설현황이랑 헬스장 정보