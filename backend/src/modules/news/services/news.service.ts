import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewsEntity } from './news.entity';
import { CreateNewsDto } from './dto/create-news.dto';

@Injectable()
export class NewsService {
    constructor(
        @InjectRepository(NewsEntity)
        private readonly newsRepository: Repository<NewsEntity>,
    ) {}

    public async create(dto: CreateNewsDto): Promise<{ message: string }> {
        const news = this.newsRepository.create(dto);
        await this.newsRepository.save(news);
        return { message: 'News added successfully' };
    }
}
