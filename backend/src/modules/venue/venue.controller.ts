import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { VenueService } from './venue.service';
import { QueryVenuesDto } from './dto/query-venues.dto';

@ApiTags('Venues')
@Controller('venues')
export class VenueController {
    constructor(private readonly venueService: VenueService) {}

    @ApiOperation({ summary: 'Get list of venues with filters and sorting' })
    @Get()
    public async getAll(@Query() query: QueryVenuesDto) {
        return await this.venueService.getAll(query);
    }
}
