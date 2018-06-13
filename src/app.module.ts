import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './Auth/auth.module';
import { UserModule } from './User/user.module';
import { ArticleModule } from './Article/article.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/support'),
    ArticleModule,
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
