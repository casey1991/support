import { Module } from '@nestjs/common';
import { SocketGateway } from './socket.gateway';
import { DealGateway } from './deal.gateway';
import { AuthModule } from '../Auth/auth.module';

@Module({
  imports: [AuthModule],
  providers: [SocketGateway, DealGateway],
})
export class SocketModel {}
