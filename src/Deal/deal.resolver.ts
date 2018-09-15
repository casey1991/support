import {
  Query,
  Resolver,
  ResolveProperty,
  Args,
  Parent,
} from '@nestjs/graphql';
@Resolver('Deal')
export class GoodsResolver {
  constructor() {}
  @Query('deal')
  async deal(@Args('id') id: string) {
    return [];
  }
  @Query()
  async deals() {
    return {};
  }
}
