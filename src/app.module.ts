import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { graphqlExpress } from 'apollo-server-express';
import { GraphQLModule, GraphQLFactory } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from './Config/config.module';
import { AuthModule } from './Auth/auth.module';
import { UserModule } from './User/user.module';
import { ArticleModule } from './Article/article.module';

import { UserEntitySubscriber } from './User/entities/user.subscriber';

@Module({
  imports: [
    ConfigModule,
    GraphQLModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'support',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
      subscribers: [UserEntitySubscriber],
    }),
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
