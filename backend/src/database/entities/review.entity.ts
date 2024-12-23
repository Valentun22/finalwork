import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { UserEntity } from "./user.entity";
import { VenueEntity } from "./venue.entity";
import {TableNameEnum} from "./table-name.enum";

@Entity(TableNameEnum.REVIEWS)
export class ReviewEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "int" })
    rating: number;

    @Column()
    comment: string;

    @ManyToOne(() => UserEntity, (user) => user.reviews)
    user: UserEntity;

    @ManyToOne(() => VenueEntity, (venue) => venue.reviews)
    venue: VenueEntity;
}
