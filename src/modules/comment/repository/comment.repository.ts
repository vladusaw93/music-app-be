import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {FilterQuery, Model, Types} from 'mongoose';

import {Comment, CommentDocument} from '../schema';

@Injectable()
export class CommentRepository {
    constructor(@InjectModel(Comment.name) private commentModel: Model<CommentDocument>) {
    }

    async findOne(FilterQuery: FilterQuery<Comment>): Promise<Comment> {
        return this.commentModel.findOne(FilterQuery);
    }

    async find(FilterQuery: FilterQuery<Comment>): Promise<Comment[]> {
        return this.commentModel.find(FilterQuery);
    }

    async findPagination(count = 20, offset = 0): Promise<Comment[]> {
        return this.commentModel.find().skip(offset).limit(count);
    }

    async create(comment: Comment): Promise<Comment> {
        const newComment = new this.commentModel(comment);
        return newComment.save();
    }

    async findOneAndUpdate(
        FilterQuery: FilterQuery<Comment>,
        comment: Partial<Comment>,
    ): Promise<Comment> {
        return this.commentModel.findOneAndUpdate(FilterQuery, comment, {
            new: true,
        });
    }

    async delete(_id: Types.ObjectId, user_id: Types.ObjectId): Promise<Comment> {
        return this.commentModel.findOneAndDelete({_id, user_id});
    }
}