import {Module} from "@nestjs/common";
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver} from "@nestjs/apollo";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./user.entity";
import { UserResolver } from './user.resolver';
import {UserService} from "./user.service";
@Module({
    imports:[
        TypeOrmModule.forFeature([User]),
    ],
    providers:[UserResolver,UserService,User],
})
export class UserModule {}