import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { UserEntity } from "./user.entity";
import { ReviewEntity } from "./review.entity";
import { NewsEntity } from "./news.entity";
import { FavoriteEntity } from "./favorite.entity";
import {TableNameEnum} from "./table-name.enum";

@Entity(TableNameEnum.VENUES)
export class VenueEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

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

    @ManyToOne(() => UserEntity, (user) => user.venues)
    owner: UserEntity;

    @OneToMany(() => ReviewEntity, (review) => review.venue)
    reviews: ReviewEntity[];

    @OneToMany(() => NewsEntity, (news) => news.venue)
    news: NewsEntity[];

    @OneToMany(() => FavoriteEntity, (favorite) => favorite.venue)
    favorites: FavoriteEntity[];
}