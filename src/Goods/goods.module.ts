import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ShopModule } from '../Shop/shop.module';
import { UserModule } from '../User/user.module';
import { SearchModule } from '../Search/search.module';
import { GoodsSchema } from './schemas/goods.schema';
import { GoodsResolver } from './goods.resolver';
import { GoodsService } from './goods.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Goods', schema: GoodsSchema }]),
    UserModule,
    forwardRef(() => ShopModule),
    SearchModule,
  ],
  controllers: [],
  providers: [GoodsResolver, GoodsService],
  exports: [GoodsService],
})
export class GoodsModule {}
