import {Module} from "@nestjs/common";
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver} from "@nestjs/apollo";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./user.entity";



@Module({
    imports:[
        TypeOrmModule.forFeature([User]),
        GraphQLModule.forRoot({
            autoSchemaFile:true,
            driver: ApolloDriver,
        }),
    ],
    providers:[],
})
export class UserModule {}