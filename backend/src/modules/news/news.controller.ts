import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';

@ApiTags('News')
@Controller('news')
export class NewsController {
    constructor(private readonly newsService: NewsService) {}

    @ApiOperation({ summary: 'Add news to a venue' })
    @Post()
    public async create(@Body() dto: CreateNewsDto) {
        return await this.newsService.create(dto);
    }
}
