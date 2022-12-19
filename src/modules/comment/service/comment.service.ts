import {Injectable} from '@nestjs/common';
import {CommentRepository} from "../repository";
import {CreateCommentDto} from "../dto";
import {Types} from "mongoose";
import {Comment} from "../schema";

@Injectable()
export class CommentService {

    constructor(private readonly commentRepository: CommentRepository) {
    }

    async create(dto: CreateCommentDto, user_id: Types.ObjectId): Promise<Comment> {
        return this.commentRepository.create({...dto, user_id});
    }

    async update({comment, track_id}: CreateCommentDto, user_id: Types.ObjectId, _id: Types.ObjectId): Promise<Comment> {
        return this.commentRepository.findOneAndUpdate({user_id, track_id, _id}, {comment})
    }

    async find(track_id: Types.ObjectId, user_id: Types.ObjectId): Promise<Comment[]> {
        return this.commentRepository.find({track_id, user_id});
    }

    delete(_id: Types.ObjectId, user_id: Types.ObjectId):Promise<Comment> {
        return this.commentRepository.delete(_id, user_id);
    }
}
