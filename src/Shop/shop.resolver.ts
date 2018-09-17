import {
  Query,
  Resolver,
  ResolveProperty,
  Args,
  Parent,
  Mutation,
} from '@nestjs/graphql';
import { ShopService } from './shop.service';
import { UserService } from '../User/user.service';
import { GoodsService } from '../Goods/goods.service';
@Resolver('Shop')
export class ShopResolver {
  constructor(
    private readonly shopService: ShopService,
    private readonly userService: UserService,
    private readonly goodsService: GoodsService,
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
  @ResolveProperty('goods')
  async getGoods(@Parent() parent) {
    const goods = parent.goods;
    return await this.goodsService.getGoodss({ _id: { $in: goods } });
  }
  @Mutation('addGoodsToShop')
  async addGoodsToShop(@Args('shopId') shopId, @Args('goodsId') _ids) {
    return await this.shopService.updateShop(
      { _id: shopId },
      { $addToSet: { goods: _ids } },
    );
  }
  @Mutation('removeGoodsFromShop')
  async removeGoodsFromShop(@Args('shopId') shopId, @Args('goodsId') _ids) {
    return await this.shopService.updateShop(
      { _id: shopId },
      { $pullAll: { goods: [_ids] } },
    );
  }
}
