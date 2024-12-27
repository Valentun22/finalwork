import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module.";
import {ConfigService} from "@nestjs/config";
import {AppConfig} from "./configs/config.type";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {SwaggerHelper} from "./common/helpers/swagger.helper";
import {Logger, ValidationPipe} from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);
    const appConfig = configService.get<AppConfig>('app');

    const config = new DocumentBuilder()
        .setTitle('pub')
        .setDescription('The pub API description')
        .setVersion('1.0')
        .addTag('API')
        .addBearerAuth({
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
            in: 'header',
        })
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerHelper.setDefaultResponses(document);
    SwaggerModule.setup('docs', app, document, {
        swaggerOptions: {
            docExpansion: 'none',
            defaultModelsExpandDepth: 7,
            persistAuthorization: true,
        },
    });
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            transform: true,
            forbidNonWhitelisted: true,
        }),
    );
    const port = appConfig.port || 3002;

    await app.listen(port, () => {
        Logger.log(`Server running on http://${appConfig.host}:${appConfig.port}`);
        Logger.log(
            `Swagger running on http://${appConfig.host}:${appConfig.port}/docs`,
        );
    });
}
bootstrap();
