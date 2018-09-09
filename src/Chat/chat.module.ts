import { Module, Global } from '@nestjs/common';

import { MessageModule } from './Message/message.module';
import { RoomModule } from './Room/room.module';
import { UserModule } from '../User/user.module';

@Global()
@Module({
  imports: [MessageModule, RoomModule, UserModule],
})
export class ChatModule {}
