import {
  Query,
  Resolver,
  ResolveProperty,
  Args,
  Parent,
} from '@nestjs/graphql';
@Resolver('Goods')
export class GoodsResolver {
  constructor() {}
  @Query('goods')
  async goods(@Args('id') id: string) {
    return [];
  }
  @Query()
  async goodss() {
    return {};
  }
}
