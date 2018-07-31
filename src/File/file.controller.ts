import { Controller, Post, FilesInterceptor } from '@nestjs/common';
import {
  UseInterceptors,
  FileInterceptor,
  UploadedFiles,
  UploadedFile,
} from '@nestjs/common';
import { FileService } from './file.service';
import { FileLocalStore } from './services/file.localstore';

// dto
import { FileCreateDto } from './dto/file.create.dto';

@Controller('file')
export class FileController {
  constructor(
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
      fileDto.mimetype,
      fileDto.name,
      fileDto.fileMeta,
    );
    console.log(result);
  }

  @Post('uploads')
  @UseInterceptors(FilesInterceptor('files'))
  async uploads(@UploadedFiles() files) {
    console.log(files);
  }
}
