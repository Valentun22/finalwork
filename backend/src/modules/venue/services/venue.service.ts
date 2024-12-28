import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VenueEntity } from './venue.entity';
import { QueryVenuesDto } from './dto/query-venues.dto';

@Injectable()
export class VenueService {
    constructor(
        @InjectRepository(VenueEntity)
        private readonly venueRepository: Repository<VenueEntity>,
    ) {}

    public async getAll(query: QueryVenuesDto): Promise<VenueEntity[]> {
        const { sortBy, filters, search } = query;

        const qb = this.venueRepository.createQueryBuilder('venue');

        if (search) {
            qb.where('venue.name ILIKE :search', { search: `%${search}%` });
        }

        if (filters) {
            filters.split(',').forEach((filter) => {
                if (filter === 'wifi') qb.andWhere(`:filter = ANY (venue.tags)`, { filter: 'wifi' });
                if (filter === 'parking') qb.andWhere(`:filter = ANY (venue.tags)`, { filter: 'parking' });
            });
        }

        if (sortBy) {
            const [field, direction] = sortBy.split(':');
            qb.orderBy(`venue.${field}`, direction.toUpperCase() as 'ASC' | 'DESC');
        }

        return qb.getMany();
    }
}
