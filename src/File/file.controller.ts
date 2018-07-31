import { Controller, Post, FilesInterceptor } from '@nestjs/common';
import {
  UseInterceptors,
  FileInterceptor,
  UploadedFiles,
  UploadedFile,
} from '@nestjs/common';
import { FileService } from './file.service';
import { ConfigService } from '../Config/config.service';
import { FileLocalStore } from './services/file.localstore';

// dto
import { FileCreateDto } from './dto/file.create.dto';

@Controller('file')
export class FileController {
  constructor(
    private readonly configService: ConfigService,
    private readonly fileService: FileService,
    private readonly fileLocalStore: FileLocalStore,
  ) {}
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile() file) {
    const mimetype = file.mimetype;
    const name = file.originalname;
    const size = file.size;
    const fileMetaBuffer = file.buffer;
    // return await this.fileService.createFile(fileDto);
    const fileMeta = await this.fileLocalStore.writeFileAsync(
      'assets/' + mimetype,
      name,
      fileMetaBuffer,
    );
    const fileDto = new FileCreateDto();
    fileDto.name = name;
    fileDto.size = size;
    fileDto.fileMeta = fileMeta;
    fileDto.mimetype = mimetype;
    return await this.fileService.createFile(fileDto);
  }

  @Post('uploads')
  @UseInterceptors(FilesInterceptor('files'))
  async uploads(@UploadedFiles() files) {
    console.log(files);
  }
}
