import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { File } from './entities/file.entity';
// dtos
import { FileCreateDto } from './dto/file.create.dto';
import { FileSearchDto } from './dto/file.search.dto';
import { FilesSearchDto } from './dto/files.search.dto';

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
  async getFile(fileSearchDto: FileSearchDto) {
    const _id = fileSearchDto._id;
    const file = await this.FileModel.findById(_id);
    return file;
  }
  async getFiles(filesSearchDto: FilesSearchDto) {
    const _ids = filesSearchDto._ids;
    const query = this.FileModel.find({});
    query.where('_id').in(_ids);
    const files = await query.exec();
    return files;
  }
}
