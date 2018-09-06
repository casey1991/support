import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { GraphQLModule } from '@nestjs/graphql';

import { ConfigModule } from './Config/config.module';
import { AuthModule } from './Auth/auth.module';
import { UserModule } from './User/user.module';
import { ChatModule } from './Chat/chat.module';
import { SocketModel } from './Socket/socket.model';
import { ArticleModule } from './Article/article.module';
import { FileModule } from './File/file.module';
import { DealModule } from './Deal/deal.module';
import { ShopModule } from './Shop/shop.module';
import { CatModule } from './Cat/cat.module';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRoot('mongodb://localhost:27017/support'),
    AuthModule,
    UserModule,
    ChatModule,
    CatModule,
    ArticleModule,
    SocketModel,
    FileModule,
    DealModule,
    ShopModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(comsumer: MiddlewareConsumer) {}
}
