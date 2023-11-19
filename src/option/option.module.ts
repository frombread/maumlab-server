import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Option} from "./option.entity";
import { OptionResolver } from './option.resolver';


@Module({
    imports:[
        TypeOrmModule.forFeature([Option]),
    ],
    providers:[Option, OptionResolver],
})
export class OptionModule {}