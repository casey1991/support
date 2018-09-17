import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ShopModule } from '../Shop/shop.module';
import { GoodsSchema } from './schemas/goods.schema';
import { GoodsResolver } from './goods.resolver';
import { GoodsService } from './goods.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Goods', schema: GoodsSchema }]),
    forwardRef(() => ShopModule),
  ],
  controllers: [],
  providers: [GoodsResolver, GoodsService],
  exports: [GoodsService],
})
export class GoodsModule {}
