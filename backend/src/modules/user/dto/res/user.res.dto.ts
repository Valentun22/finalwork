import {UserRoleEnum} from "../../../../database/enums/roles.enum";
import {ReviewEntity} from "../../../../database/entities/review.entity";
import {FavoriteEntity} from "../../../../database/entities/favorite.entity";

export class UserResDto {
  id: string;

  name: string;

  bio?: string;

  email: string;

  image: string;

  role: UserRoleEnum;

  reviews: ReviewEntity[];

  favorites: FavoriteEntity[];
}
