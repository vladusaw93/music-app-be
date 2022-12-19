import {IsString} from "class-validator";
import {Types} from "mongoose";

export class GetTrackCommentsDTO {
    @IsString()
    track_id: Types.ObjectId;
}