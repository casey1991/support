import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { graphqlExpress } from 'apollo-server-express';
import { GraphQLModule, GraphQLFactory } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './Auth/auth.module';
import { UserModule } from './User/user.module';
import { CatModule } from './Cat/cat.module';
import { ArticleModule } from './Article/article.module';

@Module({
  imports: [
    GraphQLModule,
    MongooseModule.forRoot('mongodb://localhost/support'),
    AuthModule,
    UserModule,
    ArticleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  constructor(private readonly graphQLFactory: GraphQLFactory) {}
  configure(comsumer: MiddlewareConsumer) {
    // const typeDefs = this.graphQLFactory.mergeTypesByPaths('./**/*.graphql');
    // const schema = this.graphQLFactory.createSchema({ typeDefs });
    // comsumer
    // .apply(graphqlExpress(req => ({ schema, rootValue: req })))
    // .forRoutes('/graphql');
  }
}
