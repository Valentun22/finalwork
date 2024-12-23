import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { UserEntity } from "./user.entity";
import { VenueEntity } from "./venue.entity";
import {TableNameEnum} from "./table-name.enum";

@Entity(TableNameEnum.MEETINGS)
export class MeetingEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: string;

    @Column()
    time: string;

    @Column()
    purpose: string;

    @ManyToOne(() => UserEntity)
    user: UserEntity;

    @ManyToOne(() => VenueEntity)
    venue: VenueEntity;
}
