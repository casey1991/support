import {Controller,Get} from '@nestjs/common';
@Controller('articles')
export class ArticleController{
    @Get()
    createArticle(){
        return 'article api'
    }
}