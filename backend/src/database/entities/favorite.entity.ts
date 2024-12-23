import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { UserEntity} from "./user.entity";
import { VenueEntity } from "./venue.entity";
import {TableNameEnum} from "./table-name.enum";

@Entity(TableNameEnum.FAVORITE)
export class FavoriteEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, (user) => user.favorites)
  user: UserEntity;

  @ManyToOne(() => VenueEntity, (venue) => venue.favorites)
  venue: VenueEntity;
}
