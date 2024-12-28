import {Module} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";
import configuration from "./configs/configuration";
import {AuthModule} from "./modules/auth/auth.module";
import {PostgresModule} from "./modules/postgres/postgres.module";
import {RedisModule} from "./modules/redis/redis.module";
import {UserModule} from "./modules/user/user.module";
import {FavoriteModule} from "./modules/favorite/favorite.module";
import {ReviewModule} from "./modules/review/review.module";

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
    ],
})
export class AppModule {}