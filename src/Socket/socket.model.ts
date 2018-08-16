import { Module } from '@nestjs/common';
import { SocketGateway } from './gatewaies/socket.gateway';
import { ChatGateway } from './gatewaies/chat.gateway';
import { AuthModule } from '../Auth/auth.module';
import { ChatModule } from '../Chat/chat.module';

@Module({
  imports: [AuthModule, ChatModule],
  providers: [SocketGateway, ChatGateway],
})
export class SocketModel {}
