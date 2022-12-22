import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {LikeService} from "../service";
import {GetCurrentUserId} from "../../common/decorators";
import {Types} from "mongoose";
import {AllLikesResponseDto, CreateLikeDto} from "../dto";
import {Like} from "../schema";

@Controller('like')
export class LikeController {
    constructor(private readonly likeService: LikeService) {
    }

    @Post()
    create(@Body() dto: CreateLikeDto, @GetCurrentUserId() user_id: Types.ObjectId): Promise<Like> {
        return this.likeService.create(dto.track_id, user_id)
    }

    @Get(':id')
    async getAllForTrack(@Param('id') track_id, @GetCurrentUserId() user_id: Types.ObjectId): Promise<AllLikesResponseDto> {
        return this.likeService.getAllLikes(track_id, user_id);
    }

    @Delete(':id')
    async delete(@Param('id') track_id, @GetCurrentUserId() user_id: Types.ObjectId) {
return this.likeService.delete(track_id, user_id);
    }
}
