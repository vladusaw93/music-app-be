import {Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {APP_GUARD} from '@nestjs/core';
import {MongooseModule} from '@nestjs/mongoose';
import {AuthModule} from './modules/auth/auth.module';
import {AtGuard} from './modules/common/guards';
import {MailModule} from './modules/mail/mail.module';
import {MorganModule} from 'nest-morgan';
import {TrackModule} from "./modules/track/track.module";
import {FileModule} from "./modules/file/file.module";
import {ServeStaticModule} from "@nestjs/serve-static";
import {join} from "path";

@Module({
    imports: [
        ConfigModule.forRoot({isGlobal: true}),
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (config: ConfigService) => ({
                uri: config.get<string>('DB_URL'),
            }),
            inject: [ConfigService],
        }),
        ServeStaticModule.forRoot({
            rootPath: join(process.cwd(), 'static'),
        }),
        AuthModule,
        MailModule,
        MorganModule,
        TrackModule,
        FileModule
    ],
    providers: [{provide: APP_GUARD, useClass: AtGuard}],
})
export class AppModule {
}
