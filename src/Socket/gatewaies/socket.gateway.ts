import {
  WebSocketGateway,
  SubscribeMessage,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WsException,
} from '@nestjs/websockets';
import { AuthService } from '../../Auth/auth.service';

@WebSocketGateway()
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly authService: AuthService) {}
  handleConnection(client) {
    console.log('connected', client);
  }
  handleDisconnect(client) {
    console.log('disconnected', client);
  }
  onEvent(client, data) {}
}
