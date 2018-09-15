import {
  Query,
  Resolver,
  ResolveProperty,
  Args,
  Parent,
} from '@nestjs/graphql';
@Resolver('Shop')
export class GoodsResolver {
  constructor() {}
  @Query('shop')
  async shop(@Args('id') id: string) {
    return [];
  }
  @Query()
  async shops() {
    return {};
  }
}
