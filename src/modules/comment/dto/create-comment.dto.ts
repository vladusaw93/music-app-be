import {IsNotEmpty, IsString} from "class-validator";
import {Types} from "mongoose";

export class CreateCommentDto {
    @IsString()
    @IsNotEmpty()
    comment: string;

    @IsString()
    @IsNotEmpty()
    track_id: Types.ObjectId;

}