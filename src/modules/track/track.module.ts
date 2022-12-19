import {Module} from '@nestjs/common';
import {TrackService} from './service';
import {TrackController} from './controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Track, TrackSchema} from "./schema";
import {TrackRepository} from "./repository";
import {FileModule} from "../file/file.module";

@Module({
    imports: [MongooseModule.forFeature([{name: Track.name, schema: TrackSchema}]),FileModule],
    providers: [TrackService, TrackRepository],
    controllers: [TrackController]
})
export class TrackModule {
}