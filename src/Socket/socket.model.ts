import { Module } from '@nestjs/common';
import { SocketController } from './socket.controller';
import { SocketService } from './socket.service';
import { SocketGateway } from './gatewaies/socket.gateway';
import { ChatGateway } from './gatewaies/chat.gateway';
import { AuthModule } from '../Auth/auth.module';
import { ChatModule } from '../Chat/chat.module';

@Module({
  imports: [AuthModule, ChatModule],
  controllers: [SocketController],
  providers: [SocketService, SocketGateway, ChatGateway],
  exports: [SocketService],
})
export class SocketModel {}
