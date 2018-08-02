import {
  WebSocketGateway,
  SubscribeMessage,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WsException,
} from '@nestjs/websockets';
import { UseGuards } from '@nestjs/common';
import { SocketAuthGuard } from '../../Common/Guards/socket.auth.guard';
import { AuthService } from '../../Auth/auth.service';

@WebSocketGateway({ namespace: 'CHAT' })
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly authService: AuthService) {}
  afterInit(server) {
    server.use((socket, next) => {
      const token = socket.handshake.query.token;
      const validaTokenPromise = this.authService.validateToken(token);
      validaTokenPromise
        .then(result => {
          socket.user = result;
          next();
        })
        .catch(result => {
          next(new WsException(result.message));
        });
    });
  }
  handleConnection(client) {
    console.log('connected', client.user._id);
  }
  handleDisconnect(client) {
    console.log('disconnected', client.user._id);
  }
  @UseGuards(SocketAuthGuard)
  @SubscribeMessage('events')
  onEvent(client, data) {
    console.log(client.user.email + ':', data);
  }
}
