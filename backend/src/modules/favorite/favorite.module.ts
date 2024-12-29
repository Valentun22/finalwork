import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoriteController } from './favorite.controller';
import {FavoriteEntity} from "./ entities/favorite.entity";
import {FavoriteService} from "./services/favorite.service";

@Module({
    imports: [TypeOrmModule.forFeature([FavoriteEntity])],
    controllers: [FavoriteController],
    providers: [FavoriteService],
    exports: [FavoriteService],
})
export class FavoriteModule {}