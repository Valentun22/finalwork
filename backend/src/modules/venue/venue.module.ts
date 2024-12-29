import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VenueController } from './venue.controller';
import {VenueEntity} from "./entity/venue.entity";
import {VenueService} from "./services/venue.service";

@Module({
    imports: [TypeOrmModule.forFeature([VenueEntity])],
    controllers: [VenueController],
    providers: [VenueService],
    exports: [VenueService],
})
export class VenueModule {}