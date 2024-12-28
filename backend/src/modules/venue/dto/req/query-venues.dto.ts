import { IsOptional, IsString } from 'class-validator';

export class QueryVenuesDto {
    @IsOptional()
    @IsString()
    search?: string;

    @IsOptional()
    @IsString()
    sortBy?: string;

    @IsOptional()
    @IsString()
    filters?: string;
}
