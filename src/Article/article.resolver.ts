import {
  Query,
  Resolver,
  ResolveProperty,
  Args,
  Parent,
  Mutation,
  Context,
} from '@nestjs/graphql';
import { UserService } from '../User/user.service';
import { ArticleService } from './article.service';
import { UseGuards } from '@nestjs/common';
import { GraphqlAuthGuard } from '../Common/Guards/graphql.auth.guard';
@Resolver('Article')
export class ArticleResolver {
  constructor(
    private readonly userService: UserService,
    private readonly articleService: ArticleService,
  ) {}
  @Query('article')
  async article(@Args('id') id: string) {
    return await this.articleService.getArticle({ _id: id });
  }
  @Query()
  async articles() {
    return await this.articleService.getArticles();
  }
  @ResolveProperty('author')
  async getAuthor(@Parent() parent) {
    return await this.userService.findUser(parent.author);
  }
  @UseGuards(GraphqlAuthGuard)
  @Mutation('createArticle')
  async createArticle(@Args() args, @Context() context) {
    return await this.articleService.create({
      author: context.user._id,
      ...args,
    });
  }
}
