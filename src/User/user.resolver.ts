import {
  Query,
  Resolver,
  ResolveProperty,
  Args,
  Parent,
} from '@nestjs/graphql';
import { UserService } from './user.service';
@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  @Query('user')
  async user(@Args('id') id: string) {
    return await this.userService.findUser(id);
  }
  @Query()
  async users() {
    return await this.userService.findUsers();
  }
}
