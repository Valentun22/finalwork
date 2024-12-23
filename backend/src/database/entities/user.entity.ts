import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { UserRoleEnum } from "../enums/roles.enum";
import { VenueEntity } from "./venue.entity";
import { ReviewEntity } from "./review.entity";
import { FavoriteEntity } from "./favorite.entity";
import {RefreshTokenEntity} from "./refresh-token.entity";
import {TableNameEnum} from "./table-name.enum";

@Entity(TableNameEnum.USERS)
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column({ type: "enum", enum: UserRoleEnum, default: UserRoleEnum.USER })
  role: UserRoleEnum;

  @OneToMany(() => VenueEntity, (venue) => venue.owner)
  venues: VenueEntity[];

  @OneToMany(() => ReviewEntity, (review) => review.user)
  reviews: ReviewEntity[];

  @OneToMany(() => FavoriteEntity, (favorite) => favorite.user)
  favorites: FavoriteEntity[];

  @OneToMany(() => RefreshTokenEntity, (entity) => entity.user)
  refreshTokens?: RefreshTokenEntity[];
}