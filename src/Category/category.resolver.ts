import {
  Query,
  Resolver,
  ResolveProperty,
  Args,
  Parent,
} from '@nestjs/graphql';
@Resolver('Category')
export class GoodsResolver {
  constructor() {}
  @Query('category')
  async category(@Args('id') id: string) {
    return [];
  }
  @Query()
  async categories() {
    return {};
  }
}
