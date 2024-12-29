import {
    IsString,
    IsNumber,
    IsArray,
    IsOptional,
} from 'class-validator';

export class UpdateVenueDto {
    @IsString()
    @IsOptional()
    name?: string;

    @IsString()
    @IsOptional()
    image?: string;

    @IsString()
    @IsOptional()
    location?: string;

    @IsNumber()
    @IsOptional()
    averageCheck?: number;

    @IsString()
    @IsOptional()
    workingHours?: string;

    @IsString()
    @IsOptional()
    contactInfo?: string;

    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    tags?: string[];

    @IsString()
    @IsOptional()
    description?: string;

    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    menu?: string[];

    @IsNumber()
    @IsOptional()
    latitude?: number;

    @IsNumber()
    @IsOptional()
    longitude?: number;

    @IsString()
    @IsOptional()
    type?: string;

    @IsOptional()
    features?: {
        wifi: boolean;
        parking: boolean;
        liveMusic: boolean;
    };
}