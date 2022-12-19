import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document, Types} from 'mongoose';

export type TrackDocument = Track & Document;

@Schema()
export class Track {
    _id?: Types.ObjectId;

    @Prop()
    user_id: Types.ObjectId;

    @Prop()
    name: string;

    @Prop()
    artist: string;

    @Prop()
    text: string;

    @Prop({default: 0})
    listens?: number;

    @Prop()
    picture: string;

    @Prop()
    audio: string;
}

export const TrackSchema = SchemaFactory.createForClass(Track);
