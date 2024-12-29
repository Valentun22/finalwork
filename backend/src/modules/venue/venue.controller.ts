import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
    Query,
    Req,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import {RoleUser} from "../../common/decorators/check.role";
import {RolesGuard} from "../../common/guards/role.guard";
import {UserRoleEnum} from "../../database/enums/roles.enum";
import {UpdateVenueDto} from "./dto/req/update.venue.req.dto";
import {CreateVenueDto} from "./dto/req/create.venue.req.dto";
import {VenueService} from "./services/venue.service";
import RequestWithUser from "./dto/req/request-with-user.interface";

@ApiTags('Venue')
@Controller('venue')
export class VenueController {
    constructor(private readonly venueService: VenueService) {}

    @ApiOperation({ summary: 'Create a new venue' })
    @UseGuards(JwtAuthGuard, RolesGuard)
    @RoleUser(UserRoleEnum.ADMIN)
    @Post()
    async create(@Body() createVenueDto: CreateVenueDto) {
        return await this.venueService.create(createVenueDto);
    }

    @ApiOperation({ summary: 'Get all venues' })
    @Get()
    async findAll(
        @Query('search') search?: string,
        @Query('tags') tags?: string[],
        @Query('averageCheck') averageCheck?: number,
        @Query('rating') rating?: number,
        @Query('type') type?: string,
        @Query('features') features?: string, // JSON-рядок з особливостями
        @Query('limit') limit?: number,
        @Query('offset') offset?: number,
    ) {
        return await this.venueService.findAll({
            search,
            tags,
            averageCheck,
            rating,
            type,
            features: features ? JSON.parse(features) : undefined,
            limit,
            offset,
        });
    }

    @ApiOperation({ summary: 'Get venue by ID' })
    @ApiParam({ name: 'id', type: String })
    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.venueService.findOne(id);
    }

    @ApiOperation({ summary: 'Update venue by ID' })
    @ApiParam({ name: 'id', type: String })
    @UseGuards(JwtAuthGuard, RolesGuard)
    @RoleUser(UserRoleEnum.ADMIN)
    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updateVenueDto: UpdateVenueDto,
    ) {
        return await this.venueService.update(id, updateVenueDto);
    }

    @ApiOperation({ summary: 'Delete venue by ID' })
    @ApiParam({ name: 'id', type: String })
    @UseGuards(JwtAuthGuard, RolesGuard)
    @RoleUser(UserRoleEnum.ADMIN)
    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.venueService.remove(id);
    }

    @ApiOperation({ summary: 'Like a venue' })
    @ApiParam({ name: 'venueId', type: String })
    @UseGuards(JwtAuthGuard)
    @Post(':venueId/like')
    async likeVenue(@Req() req: RequestWithUser, @Param('venueId') venueId: string) {
        const userId = req.user.id;
        return await this.venueService.likeVenue(venueId, userId);
    }

    @ApiOperation({ summary: 'Unlike a venue' })
    @ApiParam({ name: 'venueId', type: String })
    @UseGuards(JwtAuthGuard)
    @Delete(':venueId/like')
    async unlikeVenue(@Req() req: RequestWithUser, @Param('venueId') venueId: string) {
        const userId = req.user.id;
        return await this.venueService.unlikeVenue(venueId, userId);
    }
}