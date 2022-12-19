import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {CommentService} from "../service";
import {CreateCommentDto} from "../dto";
import {GetCurrentUserId} from "../../common/decorators";
import {Types} from "mongoose";
import {Comment} from "../schema";
import {GetTrackCommentsDTO} from "../dto";

@Controller('comment')
export class CommentController {
    constructor(private readonly commentService: CommentService) {
    }

    @Post()
    create(@Body() body: CreateCommentDto, @GetCurrentUserId() user_id: Types.ObjectId): Promise<Comment> {
        return this.commentService.create(body, user_id);
    }

    @Put(':id')
    async update(@Param('id') _id, @Body() comment: CreateCommentDto,
                 @GetCurrentUserId() user_id: Types.ObjectId): Promise<Comment> {
        return this.commentService.update(comment, user_id, _id);
    }

    @Get()
    async getAllForTrack(@Body() dto: GetTrackCommentsDTO, @GetCurrentUserId() user_id: Types.ObjectId): Promise<Comment[]> {
        return this.commentService.find(dto.track_id, user_id);
    }

    @Delete(':id')
    async delete(@Param('id') _id, @GetCurrentUserId() user_id: Types.ObjectId): Promise<Comment> {
        return this.commentService.delete(_id, user_id);
    }
}
