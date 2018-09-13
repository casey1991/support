import {
  Query,
  Resolver,
  ResolveProperty,
  Args,
  Parent,
  Mutation,
  Subscription,
  Context,
} from '@nestjs/graphql';
import { withFilter } from 'graphql-subscriptions';
import { MessageService } from './message.service';
import { UserService } from '../../User/user.service';
import { RoomService } from '../Room/room.service';

import { MessageCreateDto } from './dto/message.create.dto';
import { PubSub } from 'graphql-subscriptions';
import { UseGuards } from '@nestjs/common';
import { GraphqlAuthGuard } from '../../Common/Guards/graphql.auth.guard';

const pubSub = new PubSub();

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
  @UseGuards(GraphqlAuthGuard)
  async messages(@Args('roomId') roomId: string, @Context() context) {
    const currentUser = context.user;
    return await this.messageService.findMessages(currentUser._id, roomId);
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
  @UseGuards(GraphqlAuthGuard)
  @Mutation()
  async createMessage(
    @Args('roomId') roomId: string,
    @Args('type') type: number,
    @Args('text') text: string,
    @Context() context,
  ) {
    const currentUser = context.user;
    const dto = new MessageCreateDto();
    dto.room = roomId;
    dto.user = currentUser._id;
    dto.text = text;
    dto.type = type;
    const message = await this.messageService.createMessage(dto);
    pubSub.publish('messageCreated', { messageCreated: message });
    return message;
  }
  @UseGuards(GraphqlAuthGuard)
  @Subscription('messageCreated')
  messageCreated() {
    return {
      subscribe: withFilter(
        () => pubSub.asyncIterator('messageCreated'),
        (payload, variables, context, info) => {
          const message = payload.messageCreated;
          if (context.user && message.room.equals(variables.roomId)) {
            return true;
          } else {
            return false;
          }
        },
      ),
    };
  }
}
