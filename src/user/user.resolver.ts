import {Mutation, Resolver} from '@nestjs/graphql';
import {User} from "./user.entity";
import {UserService} from "./user.service";

@Resolver(()=>User)
export class UserResolver {
    constructor(private userService:UserService) {

    }
    @Mutation(() => User)
    async createUser(): Promise<User> {
        return this.userService.createUser();
    }
}
