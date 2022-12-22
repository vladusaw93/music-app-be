import {Injectable} from '@nestjs/common';
import {Types} from "mongoose";
import {LikeRepository} from "../repository";
import {LikeExist} from "../errors";
import {Like} from "../schema";
import {AllLikesResponseDto} from "../dto";

@Injectable()
export class LikeService {

    constructor(private readonly likeRepository: LikeRepository) {
    }

    async create(track_id: Types.ObjectId, user_id: Types.ObjectId): Promise<Like> {
        const like = await this.likeRepository.findOne({track_id, user_id});
        if (like) LikeExist();
        return this.likeRepository.create({track_id, user_id});
    }

    async getAllLikes(track_id, user_id: Types.ObjectId): Promise<AllLikesResponseDto> {
        const user_like = await this.likeRepository.findOne({track_id, user_id});
        const likes = await this.likeRepository.getCount({track_id});
        return {likes, liked: !!user_like}
    }

    delete(track_id, user_id: Types.ObjectId): Promise<Like> {
        return this.likeRepository.delete(track_id, user_id);
    }
}
