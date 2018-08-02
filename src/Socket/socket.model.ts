import { Module } from '@nestjs/common';
import { SocketGateway } from './gatewaies/socket.gateway';
import { ChatGateway } from './gatewaies/chat.gateway';
import { AuthModule } from '../Auth/auth.module';

@Module({
  imports: [AuthModule],
  providers: [SocketGateway, ChatGateway],
})
export class SocketModel {}
