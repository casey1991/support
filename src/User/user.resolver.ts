import {
  Query,
  Resolver,
  ResolveProperty,
  Args,
  Parent,
  Mutation,
  Context,
} from '@nestjs/graphql';
import { UserService } from './user.service';
import { omit } from 'lodash';
import { UseGuards } from '@nestjs/common';
import { GraphqlAuthGuard } from '../Common/Guards/graphql.auth.guard';
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
  @UseGuards(GraphqlAuthGuard)
  @Query()
  async currentUser(@Context() context) {
    const currentUserId = context.user._id;
    return await this.userService.findUser(currentUserId);
  }
  @UseGuards(GraphqlAuthGuard)
  @Mutation()
  async updateUser(@Context() context, @Args() args) {
    const userId = context.user._id;
    return await this.userService.updateUser(userId, args);
  }
}
