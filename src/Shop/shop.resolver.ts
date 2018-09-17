import {
  Query,
  Resolver,
  ResolveProperty,
  Args,
  Parent,
} from '@nestjs/graphql';
import { ShopService } from './shop.service';
import { UserService } from '../User/user.service';
@Resolver('Shop')
export class ShopResolver {
  constructor(
    private readonly shopService: ShopService,
    private readonly userService: UserService,
  ) {}
  @Query('shop')
  async shop(@Args('id') id: string) {
    return await this.shopService.getShop(id);
  }
  @Query()
  async shops() {
    return await this.shopService.getShops();
  }
  @ResolveProperty('owner')
  async getOwner(@Parent() parent) {
    const userId = parent.owner;
    return await this.userService.findUser(userId);
  }
}
