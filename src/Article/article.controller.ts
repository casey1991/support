import { Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
@Controller('article')
export class ArticleController {
  @Post()
  @UseGuards(AuthGuard('jwt'))
  createArticle() {
    return 'article api';
  }
}
