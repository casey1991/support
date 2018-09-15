import {
  Query,
  Resolver,
  ResolveProperty,
  Args,
  Parent,
} from '@nestjs/graphql';
@Resolver('User')
export class GoodsResolver {
  constructor() {}
  @Query('goods')
  async user(@Args('id') id: string) {
    return [];
  }
  @Query()
  async users() {
    return {};
  }
}
