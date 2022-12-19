import {IsNotEmpty, IsString} from "class-validator";

export class CreateTrackDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    artist: string;

    @IsString()
    @IsNotEmpty()
    text: string;
}