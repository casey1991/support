import {
  Query,
  Resolver,
  ResolveProperty,
  Args,
  Parent,
  Mutation,
} from '@nestjs/graphql';
import { GoodsService } from './goods.service';
import { ShopService } from '../Shop/shop.service';
import { GoodsCreateDto } from './dto/goods.create.dto';
@Resolver('Goods')
export class GoodsResolver {
  constructor(
    private readonly goodsService: GoodsService,
    private readonly shopService: ShopService,
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
  @Mutation('createGoods')
  async createGoods(@Args() args) {
    const dto = new GoodsCreateDto();
    dto.name = args.name;
    dto.amount = args.amount;
    dto.price = args.price;
    dto.type = args.type;
    dto.category = args.category;
    dto.owner = args.owner;
    dto.shop = args.shop;
    return await this.goodsService.createGoods(dto);
  }
}
