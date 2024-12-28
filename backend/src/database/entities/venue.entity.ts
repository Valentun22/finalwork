import {Entity, Column, ManyToOne, OneToMany, OneToOne} from "typeorm";
import { UserEntity } from "./user.entity";
import { NewsEntity } from "./news.entity";
import {SignboardEntity} from "./signboard.entity";
import {BaseModel} from "./models/base.model";
import {TableNameEnum} from "../enums/table-name.enum";
import {ReviewEntity} from "../../modules/review/ entities/review.entity";

@Entity(TableNameEnum.VENUES)
export class VenueEntity extends BaseModel{
    @Column()
    name: string;

    @Column('text', { nullable: true })
    image?: string;

    @Column()
    location: string;

    @Column({ type: "float" })
    averageCheck: number;

    @Column()
    workingHours: string;

    @Column()
    contactInfo: string;

    @Column("simple-array")
    tags: string[];

    @Column()
    @ManyToOne(() => UserEntity, (user) => user.venues)
    owner: UserEntity;

    @Column()
    @OneToMany(() => ReviewEntity, (review) => review.venue)
    reviews: ReviewEntity[];

    @Column()
    @OneToMany(() => NewsEntity, (news) => news.venue)
    news: NewsEntity[];

    @Column()
    @OneToMany(() => FavoriteEntity, (favorite) => favorite.venue)
    favorites: FavoriteEntity[];

    @Column()
    @OneToOne(() => SignboardEntity, (entity) => entity.venue)
    signboard?: SignboardEntity;
}