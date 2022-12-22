import { Module } from '@nestjs/common';
import { LikeService } from './service';
import { LikeController } from './controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Like, LikeSchema} from "./schema";
import {LikeRepository} from "./repository";

@Module({
  imports: [MongooseModule.forFeature([{name: Like.name, schema: LikeSchema}])],
  providers: [LikeService, LikeRepository],
  controllers: [LikeController]
})
export class LikesModule {}
