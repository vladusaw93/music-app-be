import {HttpException, HttpStatus} from "@nestjs/common";

export const LikeExist = () => {
    throw new HttpException('This track is already liked!', HttpStatus.BAD_REQUEST);
};