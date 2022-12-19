import {Body, Controller, Get, Param, Post, Query, UploadedFiles, UseInterceptors} from '@nestjs/common';
import {FileFieldsInterceptor} from "@nestjs/platform-express";
import {Types} from "mongoose";

import {GetCurrentUserId} from "../../common/decorators";
import {TrackService} from "../service";
import {CreateTrackDto} from "../dto";
import {Track} from "../schema";

@Controller('track')
export class TrackController {
    constructor(private readonly trackService: TrackService) {
    }

    @Get()
    getAll(@Query('count') count: number,
           @Query('offset') offset: number): Promise<Track[]> {
        return this.trackService.findAll(count, offset);
    }

    @Get('/search')
    async search(@Query('query') query): Promise<Track[]> {
        return this.trackService.search(query);
    }

    @Get(':id')
    async getTrack(@Param('id') _id: Types.ObjectId): Promise<Track> {
        return this.trackService.findById(_id);
    }

    @Post()
    @UseInterceptors(FileFieldsInterceptor([{name: 'picture', maxCount: 1}, {name: 'audio', maxCount: 1},]))
    async createTrack(@Body() dto: CreateTrackDto, @GetCurrentUserId() user_id: Types.ObjectId, @UploadedFiles() files): Promise<Track> {
        const {picture, audio} = files;
        return this.trackService.create(dto, user_id, picture[0], audio[0]);
    }

    @Post('listen/:id')
    async listen(@Param('id') _id): Promise<Track> {
        return this.trackService.listen(_id);
    }

}
