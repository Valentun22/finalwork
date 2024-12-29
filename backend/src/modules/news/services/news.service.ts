import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {CreateNewsDto} from "../dto/create-news.dto";
import {NewsEntity} from "../entity/news.entity";
import {UpdateNewsDto} from "../dto/update-news.dto";

@Injectable()
export class NewsService {
    constructor(
        @InjectRepository(NewsEntity)
        private readonly newsRepository: Repository<NewsEntity>,
    ) {}

    async create(dto: CreateNewsDto): Promise<NewsEntity> {
        const news = this.newsRepository.create(dto);
        return await this.newsRepository.save(news);
    }

    async findAll(
        venueId?: string,
        limit?: number,
        offset?: number,
    ): Promise<NewsEntity[]> {
        const query = this.newsRepository.createQueryBuilder('news');

        if (venueId) {
            query.where('news.venueId = :venueId', { venueId });
        }

        if (limit) {
            query.take(limit);
        }

        if (offset) {
            query.skip(offset);
        }

        return await query.getMany();
    }

    async findOne(id: string): Promise<NewsEntity> {
        const news = await this.newsRepository.findOne({ where: { id } });
        if (!news) {
            throw new NotFoundException(`News with ID ${id} not found`);
        }
        return news;
    }

    async update(id: string, dto: UpdateNewsDto): Promise<NewsEntity> {
        const news = await this.findOne(id);
        this.newsRepository.merge(news, dto);
        return await this.newsRepository.save(news);
    }

    async remove(id: string): Promise<void> {
        await this.newsRepository.delete(id);
    }
}