import {
  Query,
  Resolver,
  ResolveProperty,
  Args,
  Parent,
} from '@nestjs/graphql';
import { find, filter } from 'lodash';
const rooms = [
  {
    id: 'room1',
    users: [
      {
        id: 'user1',
        email: 'user1@email.com',
        password: 'user1-password',
        name: 'user1',
      },
    ],
    name: 'room1',
    messages: [{ id: 'message1', user: 'user1', room: 'room1', text: 'text1' }],
  },
];
@Resolver('Room')
export class RoomResolver {
  @Query('room')
  room(@Args('id') id: String) {
    return find(rooms, { id });
  }

  // @ResolveProperty()
  @Query()
  rooms() {
    return rooms;
  }
}
