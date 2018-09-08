import { Module, Global } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageResolver } from './message.resolver';
import { MessageSchema } from './schemas/message.schema';

import { MessageController } from './message.controller';
import { MessageService } from './message.service';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Message', schema: MessageSchema }]),
  ],
  controllers: [MessageController],
  providers: [MessageService, MessageResolver],
  exports: [MessageService],
})
export class MessageModule {}
