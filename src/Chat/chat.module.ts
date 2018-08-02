import { Module, Global } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomSchema } from './schemas/room.schema';

import { ChatController } from './chat.controller';

@Global()
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Room', schema: RoomSchema }])],
  controllers: [ChatController],
  providers: [],
  exports: [],
})
export class ChatModule {}
