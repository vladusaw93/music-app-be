import {IsString} from "class-validator";
import {Types} from "mongoose";

export class CreateLikeDto {
    @IsString()
    track_id: Types.ObjectId;
}