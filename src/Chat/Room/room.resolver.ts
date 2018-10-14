import {
  Query,
  Resolver,
  ResolveProperty,
  Args,
  Parent,
  Context,
  Mutation,
} from '@nestjs/graphql';
import { RoomService } from './room.service';
import { UserService } from '../../User/user.service';
import { MessageService } from '../Message/message.service';
import { RoomSearchDto } from './dto/room.search.dto';
import { findIndex, filter, map, includes } from 'lodash';
import { UseGuards } from '@nestjs/common';
import { GraphqlAuthGuard } from '../../Common/Guards/graphql.auth.guard';
@Resolver('Room')
export class RoomResolver {
  constructor(
    private readonly roomService: RoomService,
    private readonly userService: UserService,
    private readonly messageService: MessageService,
  ) {}
  @Query('room')
  async room(@Args('id') id: string) {
    return await this.roomService.getRoom(id);
  }

  // @ResolveProperty()
  @Query()
  @UseGuards(GraphqlAuthGuard)
  async rooms(@Context() context) {
    const dto = new RoomSearchDto();
    dto._userIds = [context.user._id];
    return await this.roomService.searchRooms(dto);
  }
  @UseGuards(GraphqlAuthGuard)
  @Mutation('createRoom')
  async createRoom(@Args('name') name: string, @Context() context) {
    const currentUser = context.user;
    return await this.roomService.createRoom({
      name,
      users: [currentUser._id],
    });
  }
  @ResolveProperty('users')
  async getUsers(@Parent() room) {
    const users = room.users;
    const all = await this.userService.getAll();
    return filter(all, item => {
      const userId = item.id;
      const include = findIndex(users, user => {
        return user._id.equals(userId);
      });
      return include;
    });
  }
  @ResolveProperty('messages')
  async getMessages(@Parent() room) {
    const roomId = room.id;
    return await this.messageService.findMessagesByRoomId(roomId);
  }
}
