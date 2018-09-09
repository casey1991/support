import {
  Query,
  Resolver,
  ResolveProperty,
  Args,
  Parent,
} from '@nestjs/graphql';
import { FileService } from './file.service';
@Resolver('File')
export class FileResolver {
  constructor(private readonly fileService: FileService) {}
  @Query('file')
  async file(@Args('id') id: string) {
    return await this.fileService.getFile(id);
  }
  @Query()
  async files() {
    return await this.fileService.getFiles();
  }
}
