import {
  Query,
  Resolver,
  ResolveProperty,
  Args,
  Parent,
} from '@nestjs/graphql';
import { find, filter } from 'lodash';
const messages = [
  { id: 'message1', user: 'user1', room: 'room1', text: 'text1' },
];
@Resolver('Message')
export class MessageResolver {
  @Query('message')
  message(@Args('id') id: String) {
    return find(messages, { id });
  }

  // @ResolveProperty()
  @Query()
  messages() {
    return messages;
  }
}
