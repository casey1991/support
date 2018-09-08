import {
  Query,
  Resolver,
  ResolveProperty,
  Args,
  Parent,
} from '@nestjs/graphql';
import { find, filter } from 'lodash';
const users = [
  {
    id: 'user1',
    email: 'user1@email.com',
    password: 'user1-password',
    name: 'user1',
  },
];
@Resolver('User')
export class UserResolver {
  @Query('user')
  user(@Args('id') id: String) {
    return find(users, { id });
  }

  // @ResolveProperty()
  @Query()
  users() {
    // return filter(users);
    return users;
  }
}
