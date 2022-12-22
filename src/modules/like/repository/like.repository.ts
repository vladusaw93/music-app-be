import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {FilterQuery, Model, Types} from 'mongoose';

import {Like, LikeDocument} from '../schema';

@Injectable()
export class LikeRepository {
    constructor(@InjectModel(Like.name) private likeModel: Model<LikeDocument>) {
    }

    async findOne(FilterQuery: FilterQuery<Like>): Promise<Like> {
        return this.likeModel.findOne(FilterQuery);
    }

    async getCount(FilterQuery: FilterQuery<Like>): Promise<number> {
        return this.likeModel.find(FilterQuery).count();
    }

    async create(like: Like): Promise<Like> {
        const newLike = new this.likeModel(like);
        return newLike.save();
    }

    async delete(track_id: Types.ObjectId, user_id: Types.ObjectId): Promise<Like> {
        return this.likeModel.findOneAndDelete({track_id, user_id});
    }

}
