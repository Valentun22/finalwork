import {UserEntity} from "../../../../database/entities/user.entity";
import {ReviewEntity} from "../../../../database/entities/review.entity";
import {NewsEntity} from "../../../../database/entities/news.entity";
import {FavoriteEntity} from "../../../../database/entities/favorite.entity";

export class SignboardResDto {
  signboard_id: string;
  title: string;
  description: string;
  body: string;
  userId: string;
  venue: {
    venueId: string;
    name: string;
    location: string;
    averageCheck: number;
    workingHours: string;
    contactInfo: string;
    tags: string[];
    image: string;
    owner: UserEntity;
    reviews: ReviewEntity[];
    news: NewsEntity[];
    favorites: FavoriteEntity[];
  };
}

