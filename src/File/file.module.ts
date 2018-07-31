import { Module } from '@nestjs/common';
import { FileController } from './file.controller';
import { FileLocalStore } from './services/file.localstore';
import { FileService } from './file.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FileSchema } from './schemas/file.schema';
import { ConfigModule } from '../Config/config.module';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([{ name: 'File', schema: FileSchema }]),
  ],
  controllers: [FileController],
  providers: [FileService, FileLocalStore],
  exports: [FileService],
})
export class FileModule {}
