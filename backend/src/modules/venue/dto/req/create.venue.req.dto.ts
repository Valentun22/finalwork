import {PickType} from "@nestjs/swagger";
import {VenueEntity} from "../../entity/venue.entity";

export class CreateVenueDto extends PickType(VenueEntity, [
    'name',
    'image',
    'location',
    'averageCheck',
    'workingHours',
    'contactInfo',
    'tags',
    'description',
    'menu',
    'latitude',
    'longitude',
    'type',
    'features',
]) {}

