import {
  Query,
  Resolver,
  ResolveProperty,
  Args,
  Parent,
} from '@nestjs/graphql';
import { RoomService } from './room.service';
import { UserService } from '../../User/user.service';
import { MessageService } from '../Message/message.service';
import { RoomSearchDto } from './dto/room.search.dto';
import { findIndex, filter, map, includes } from 'lodash';
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
  async rooms() {
    const dto = new RoomSearchDto();
    return await this.roomService.searchRooms(dto);
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
