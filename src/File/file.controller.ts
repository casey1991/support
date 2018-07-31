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
    const fileDto = new FileCreateDto();
    fileDto.fileMeta = file.buffer;
    fileDto.name = file.originalname;
    fileDto.mimetype = file.mimetype;
    fileDto.size = file.size;
    // return await this.fileService.createFile(fileDto);
    const result = await this.fileLocalStore.writeFileAsync(
      'assets/' + fileDto.mimetype,
      fileDto.name,
      fileDto.fileMeta,
    );
  }

  @Post('uploads')
  @UseInterceptors(FilesInterceptor('files'))
  async uploads(@UploadedFiles() files) {
    console.log(files);
  }
}
