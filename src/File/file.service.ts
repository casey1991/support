import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { File } from './entities/file.entity';
// dtos
import { FileCreateDto } from './dto/file.create.dto';

@Injectable()
export class FileService {
  constructor(@InjectModel('File') private readonly FileModel: Model<File>) {}
  async createFile(fileCreateDto: FileCreateDto) {
    const result = await this.FileModel.create(fileCreateDto);
    return result;
  }
  async createFiles(files: FileCreateDto[]) {
    const result = await this.FileModel.insertMany(files);
    return result;
  }
}
