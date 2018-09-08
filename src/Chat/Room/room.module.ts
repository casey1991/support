import { Module, Global } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomSchema } from './schemas/room.schema';
import { RoomResolver } from './room.resolver';

import { ChatController } from './room.controller';
import { RoomService } from './room.service';

@Global()
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Room', schema: RoomSchema }])],
  controllers: [ChatController],
  providers: [RoomService, RoomResolver],
  exports: [RoomService],
})
export class RoomModule {}
