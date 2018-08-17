import { Module, Global } from '@nestjs/common';

import { MessageModule } from './Message/message.module';
import { RoomModule } from './Room/room.module';

@Global()
@Module({
  imports: [MessageModule, RoomModule],
})
export class ChatModule {}
