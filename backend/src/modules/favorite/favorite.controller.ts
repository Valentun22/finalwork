import {
    Body,
    Controller,
    Post,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { IUserData } from '../auth/interfaces/user-data.interface';
import { AddFavoriteDto } from './dto/add-favorite.dto';
import {FavoriteService} from "./services/favorite.service";

@ApiTags('Favorites')
@Controller('favorites')
export class FavoriteController {
    constructor(private readonly favoriteService: FavoriteService) {}

    @ApiBearerAuth()
    @ApiOperation({ summary: 'Add a venue to favorites' })
    @Post()
    public async addFavorite(
        @CurrentUser() userData: IUserData,
        @Body() dto: AddFavoriteDto,
    ): Promise<{ message: string }> {
        return await this.favoriteService.addFavorite(userData, dto);
    }
}
