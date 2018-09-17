import {
  Query,
  Resolver,
  ResolveProperty,
  Args,
  Parent,
  Mutation,
  Context,
} from '@nestjs/graphql';
import { Inject, forwardRef, UseGuards } from '@nestjs/common';
import { GoodsService } from './goods.service';
import { ShopService } from '../Shop/shop.service';
import { UserService } from '../User/user.service';
import { GraphqlAuthGuard } from '../Common/Guards/graphql.auth.guard';
@Resolver('Goods')
export class GoodsResolver {
  constructor(
    private readonly goodsService: GoodsService,
    @Inject(forwardRef(() => ShopService))
    private readonly shopService: ShopService,
    private readonly userService: UserService,
  ) {}
  @Query('goods')
  async goods(@Args('id') id: string) {
    return await this.goodsService.getGoods(id);
  }
  @Query()
  async goodss() {
    return await this.goodsService.getGoodss();
  }
  @ResolveProperty('shop')
  async getShop(@Parent() goods) {
    const shopId = goods.shop;
    return await this.shopService.getShop(shopId);
  }
  @ResolveProperty('owner')
  async getOwner(@Parent() goods) {
    const ownerId = goods.owner;
    return await this.userService.findUser(ownerId);
  }
  @UseGuards(GraphqlAuthGuard)
  @Mutation('createGoods')
  async createGoods(@Args() args, @Context() context) {
    return await this.goodsService.createGoods({
      owner: context.user._id,
      ...args,
    });
  }
}
