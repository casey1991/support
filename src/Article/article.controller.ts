import { Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
@Controller('articles')
export class ArticleController {
  @Post()
  @UseGuards(AuthGuard('jwt'))
  createArticle() {
    return 'article api';
  }
}
