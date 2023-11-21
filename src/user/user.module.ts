import {Module} from "@nestjs/common";
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver} from "@nestjs/apollo";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./user.entity";
import { UserResolver } from './user.resolver';
@Module({
    imports:[
        TypeOrmModule.forFeature([User]),
    ],
    providers:[UserResolver,User],
})
export class UserModule {}