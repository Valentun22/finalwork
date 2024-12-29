import { Entity, Column, OneToMany } from "typeorm";
import {TableNameEnum} from "../../../database/enums/table-name.enum";
import {BaseModel} from "../../../database/entities/models/base.model";
import {AccountTypeEnum} from "../../../database/enums/account-type.enum";
import {UserRoleEnum} from "../../../database/enums/roles.enum";
import {VenueEntity} from "../../venue/entity/venue.entity";
import {ReviewEntity} from "../../review/ entities/review.entity";
import {FavoriteEntity} from "../../favorite/ entities/favorite.entity";
import {SignboardEntity} from "../../signboard/entity/signboard.entity";
import {VenueLikeEntity} from "../../venue/entity/venueLike.entity";
import {RefreshTokenEntity} from "../../auth/entity/refresh-token.entity";

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