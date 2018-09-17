import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article } from './interfaces/article.interface';
@Injectable()
export class ArticleService {
  constructor(
    @InjectModel('Article') private readonly ArticleModel: Model<Article>,
  ) {}
  async create(article = {}) {
    return await this.ArticleModel.create(article);
  }
  async getArticle(conditions = {}) {
    return await this.ArticleModel.findOne(conditions);
  }
  async getArticles(conditions = {}) {
    return await this.ArticleModel.find(conditions);
  }
}
