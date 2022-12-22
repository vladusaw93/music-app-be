import {Document, Types} from "mongoose";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {User} from "../../user/shcema";
import {Track} from "../../track/schema";

export type LikeDocument = Like & Document;

@Schema()
export class Like {
    _id?: Types.ObjectId;

    @Prop({type: Types.ObjectId, ref: User.name})
    user_id: Types.ObjectId;

    @Prop({type: Types.ObjectId, ref: Track.name})
    track_id: Types.ObjectId;
}

export const LikeSchema = SchemaFactory.createForClass(Like);