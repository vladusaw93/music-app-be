import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Types, Document} from "mongoose";
import {User} from "../../user/shcema";
import {Track} from "../../track/schema";

export type CommentDocument = Comment & Document;

@Schema({timestamps: true})
export class Comment {
    _id?: Types.ObjectId;

    @Prop({type: Types.ObjectId, ref: User.name})
    user_id: Types.ObjectId;

    @Prop({type: Types.ObjectId, ref: Track.name})
    track_id: Types.ObjectId;

    @Prop()
    comment: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);