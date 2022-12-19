import { Module } from '@nestjs/common';
import { CommentService } from './service';
import { CommentController } from './controller';
import {MongooseModule} from "@nestjs/mongoose";
import {CommentSchema, Comment} from "./schema";
import {CommentRepository} from "./repository";

@Module({
  imports: [MongooseModule.forFeature([{name: Comment.name, schema: CommentSchema}])],
  providers: [CommentService, CommentRepository],
  controllers: [CommentController]
})
export class CommentModule {}
