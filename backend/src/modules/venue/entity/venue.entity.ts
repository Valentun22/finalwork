import { Entity, Column, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import {TableNameEnum} from "../../../database/enums/table-name.enum";
import {BaseModel} from "../../../database/entities/models/base.model";
import {UserEntity} from "../../../database/entities/user.entity";
import {ReviewEntity} from "../../review/ entities/review.entity";
import {NewsEntity} from "../../news/entity/news.entity";
import {FavoriteEntity} from "../../favorite/ entities/favorite.entity";
import {SignboardEntity} from "../../../database/entities/signboard.entity";


@Entity(TableNameEnum.VENUES)
export class VenueEntity extends BaseModel {
    @Column()
    name: string;

    @Column('text', { nullable: true })
    image?: string;

    @Column()
    location: string;

    @Column({ type: 'float' })
    averageCheck: number;

    @Column()
    workingHours: string;

    @Column()
    contactInfo: string;

    @Column('simple-array')
    tags: string[];

    @Column({ type: 'text', nullable: true })
    description?: string;

    @Column('simple-array', { nullable: true })
    menu?: string[];

    @Column({ type: 'float', nullable: true })
    latitude?: number; // Широта

    @Column({ type: 'float', nullable: true })
    longitude?: number; // Довгота

    @Column({ default: 0 })
    likes: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    publicationDate: Date;

    @Column({ type: 'float', nullable: true })
    rating?: number;

    @Column({ nullable: true })
    type?: string;

    @Column('simple-json', { nullable: true })
    features?: {
        wifi: boolean;
        parking: boolean;
        liveMusic: boolean;
    };

    @ManyToOne(() => UserEntity, (user) => user.venues)
    owner: UserEntity;

    @OneToMany(() => ReviewEntity, (review) => review.venue)
    reviews: ReviewEntity[];

    @OneToMany(() => NewsEntity, (news) => news.venue)
    news: NewsEntity[];

    @OneToMany(() => FavoriteEntity, (favorite) => favorite.venue)
    favorites: FavoriteEntity[];

    @OneToOne(() => SignboardEntity, (entity) => entity.venue)
    signboard?: SignboardEntity;
}