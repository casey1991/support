import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from './Config/config.module';
import { AuthModule } from './Auth/auth.module';
import { UserModule } from './User/user.module';
import { CatModule } from './Cat/cat.module';
import { ChatModule } from './Chat/chat.module';
import { SocketModel } from './Socket/socket.model';
import { ArticleModule } from './Article/article.module';
import { FileModule } from './File/file.module';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRoot('mongodb://localhost:27017/support'),
    AuthModule,
    UserModule,
    ChatModule,
    ArticleModule,
    SocketModel,
    FileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(comsumer: MiddlewareConsumer) {}
}
