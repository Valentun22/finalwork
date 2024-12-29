import { Entity, Column, OneToMany } from "typeorm";
import { UserRoleEnum } from "../enums/roles.enum";
import {RefreshTokenEntity} from "./refresh-token.entity";
import {SignboardEntity} from "./signboard.entity";
import {BaseModel} from "./models/base.model";
import {AccountTypeEnum} from "../enums/account-type.enum";
import {TableNameEnum} from "../enums/table-name.enum";
import {VenueLikeEntity} from "../../modules/venue/entity/venueLike.entity";
import {VenueEntity} from "../../modules/venue/entity/venue.entity";
import {ReviewEntity} from "../../modules/review/ entities/review.entity";
import {FavoriteEntity} from "../../modules/favorite/ entities/favorite.entity";

@Entity(TableNameEnum.USERS)
export class UserEntity extends BaseModel {

  @Column({ unique: true })
  email: string;

  @Column('text', { select: false })
  password: string;

  @Column('text', { nullable: true })
  image?: string;

  @Column('text')
  name: string;

  @Column('text', { nullable: true })
  bio?: string;

  @Column({
    type: 'enum',
    enum: AccountTypeEnum,
    default: AccountTypeEnum.BASE_ACCOUNT,
  })
  accountType: AccountTypeEnum;

  @Column({ type: "enum", enum: UserRoleEnum, default: UserRoleEnum.USER })
  role: UserRoleEnum;

  @OneToMany(() => VenueEntity, (venue) => venue.owner)
  venues?: VenueEntity[];

  @OneToMany(() => ReviewEntity, (review) => review.userId)
  reviews: ReviewEntity[];

  @OneToMany(() => FavoriteEntity, (favorite) => favorite.user)
  favorites: FavoriteEntity[];

  @OneToMany(() => RefreshTokenEntity, (entity) => entity.user)
  refreshTokens?: RefreshTokenEntity[];

  @OneToMany(() => ReviewEntity, (signboard) => signboard.userId)
  signboard: SignboardEntity[];

  @OneToMany(() => VenueLikeEntity, (like) => like.user)
  likedVenues: VenueLikeEntity[];
}