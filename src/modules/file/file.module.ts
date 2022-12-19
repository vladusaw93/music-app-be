import { Module } from '@nestjs/common';
import { FileService } from './service';

@Module({
  providers: [FileService],
  exports:[FileService]
})
export class FileModule {}
