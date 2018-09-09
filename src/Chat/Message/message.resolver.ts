import {
  Query,
  Resolver,
  ResolveProperty,
  Args,
  Parent,
  Mutation,
} from '@nestjs/graphql';
import { MessageService } from './message.service';
import { UserService } from '../../User/user.service';
import { RoomService } from '../Room/room.service';

import { MessageCreateDto } from './dto/message.create.dto';

import { find } from 'lodash';
@Resolver('Message')
export class MessageResolver {
  constructor(
    private readonly messageService: MessageService,
    private readonly userService: UserService,
    private readonly roomService: RoomService,
  ) {}
  @Query('message')
  async message(@Args('id') id: string) {
    return await this.messageService.findMessageById(id);
  }
  @Query()
  async messages() {
    return await this.messageService.findMessages();
  }
  @ResolveProperty('room')
  async getRoom(@Parent() message) {
    const roomId = message.room;
    return await this.roomService.getRoom(roomId);
  }
  @ResolveProperty('user')
  async getUser(@Parent() message) {
    const userId = message.user;
    return await this.userService.findUser(userId);
  }
  @Mutation()
  async createMessage(
    @Args('roomId') roomId: string,
    @Args('userId') userId: string,
    @Args('type') type: number,
    @Args('text') text: string,
  ) {
    const dto = new MessageCreateDto();
    dto.room = roomId;
    dto.user = userId;
    dto.text = text;
    dto.type = type;
    const message = await this.messageService.createMessage(dto);
    return message;
  }
}
