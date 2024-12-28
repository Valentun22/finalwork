import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateNewsDto {
    @IsNotEmpty()
    @IsUUID()
    venueId: string;

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    content: string;

    @IsNotEmpty()
    @IsString()
    category: string;
}
