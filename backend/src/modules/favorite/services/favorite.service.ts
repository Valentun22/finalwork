import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {FavoriteEntity} from "../ entities/favorite.entity";
import {IUserData} from "../../auth/interfaces/user-data.interface";
import {AddFavoriteDto} from "../dto/add-favorite.dto";


@Injectable()
export class FavoriteService {
    constructor(
        @InjectRepository(FavoriteEntity)
        private readonly favoriteRepository: Repository<FavoriteEntity>,
    ) {}

    public async addFavorite(
        userData: IUserData,
        dto: AddFavoriteDto,
    ): Promise<{ message: string }> {
        const favorite = this.favoriteRepository.create({
            ...dto,
            userId: userData.userId,
        });
        await this.favoriteRepository.save(favorite);
        return { message: 'Venue added to favorites successfully' };
    }
}
