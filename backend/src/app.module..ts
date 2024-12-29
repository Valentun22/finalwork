import {Module} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";
import configuration from "./configs/configuration";
import {AuthModule} from "./modules/auth/auth.module";
import {UserModule} from "./modules/user/user.module";
import {FavoriteModule} from "./modules/favorite/favorite.module";
import {ReviewModule} from "./modules/review/review.module";
import {NewsModule} from "./modules/news/news.module";
import {VenueModule} from "./modules/venue/venue.module";
import {PostgresModule} from "./repository/postgres/postgres.module";
import {RedisModule} from "./repository/redis/redis.module";
import {CriticModule} from "./modules/critic/critic.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
            isGlobal: true,
        }),
        AuthModule,
        UserModule,
        PostgresModule,
        RedisModule,
        FavoriteModule,
        ReviewModule,
        NewsModule,
        VenueModule,
        CriticModule
    ],
})
export class AppModule {}