import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Option} from "./option.entity";
import { OptionResolver } from './option.resolver';
import {OptionService} from "./option.service";


@Module({
    imports:[
        TypeOrmModule.forFeature([Option]),
    ],
    providers:[Option, OptionResolver,OptionService],
})
export class OptionModule {}