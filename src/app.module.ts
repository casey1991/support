import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import Axios from 'axios';

import { GraphQLModule } from '@nestjs/graphql';

import { ConfigModule } from './Config/config.module';
import { AuthModule } from './Auth/auth.module';
import { UserModule } from './User/user.module';
import { ChatModule } from './Chat/chat.module';
import { ArticleModule } from './Article/article.module';
import { FileModule } from './File/file.module';
import { DealModule } from './Deal/deal.module';
import { ShopModule } from './Shop/shop.module';
import { GoodsModule } from './Goods/goods.module';
import { CatModule } from './Cat/cat.module';

const validationToken = token => {
  const userPromise = new Promise((resolve, reject) => {
    Axios.get('http://localhost:3000/user', {
      headers: { Authorization: token },
    })
      .then(function(response) {
        if (response.statusText !== 'OK') {
          resolve({ user: false });
        } else {
          resolve({ user: response.data });
        }
      })
      .catch(function(error) {
        resolve({ user: false });
      });
  });
  return userPromise;
};
@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRoot('mongodb://localhost:27017/support'),
    AuthModule,
    UserModule,
    ChatModule,
    CatModule,
    ArticleModule,
    FileModule,
    DealModule,
    ShopModule,
    GoodsModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
      context: ({ req, res, connection }) => {
        if (req && res) {
          const token = req.headers.authorization;
          return validationToken(token);
        } else {
          return connection.context;
        }
      },
      subscriptions: {
        onConnect: connectionParams => {
          const token = connectionParams['Authorization'];
          return validationToken(token);
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(comsumer: MiddlewareConsumer) {}
}
