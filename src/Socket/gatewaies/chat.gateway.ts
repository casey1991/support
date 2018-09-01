import {
  WebSocketGateway,
  SubscribeMessage,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WsException,
  WebSocketServer,
} from '@nestjs/websockets';
import { UseGuards } from '@nestjs/common';
import { AuthService } from '../../Auth/auth.service';
import { MessageService } from '../../Chat/Message/message.service';

import { MessageCreateDto } from '../../Chat/Message/dto/message.create.dto';

@WebSocketGateway({ namespace: 'CHAT' })
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  constructor(
    private readonly authService: AuthService,
    private readonly messageService: MessageService,
  ) {}
  @WebSocketServer()
  server;
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
  @SubscribeMessage('sendMessage')
  async onEvent(client, message: MessageCreateDto) {
    console.log(client.user.email + ':', message);
    const result = await this.messageService.createMessage(message);
    this.server.emit('CHAT' + message.room, message);
  }
}
