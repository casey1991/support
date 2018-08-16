import { Module, Global } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomSchema } from './schemas/room.schema';

import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';

@Global()
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Room', schema: RoomSchema }])],
  controllers: [ChatController],
  providers: [ChatService],
  exports: [],
})
export class ChatModule {}
