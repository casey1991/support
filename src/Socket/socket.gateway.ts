import { WebSocketGateway, SubscribeMessage } from '@nestjs/websockets';

@WebSocketGateway()
export class SocketGateway {
  @SubscribeMessage('events')
  onEvent(client, data) {}
}
