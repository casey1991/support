import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ShopModule } from '../Shop/shop.module';
import { GoodsSchema } from './schemas/goods.schema';
import { GoodsResolver } from './goods.resolver';
import { GoodsService } from './goods.service';
import { ShopService } from '../Shop/shop.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Goods', schema: GoodsSchema }]),
    ShopModule,
  ],
  controllers: [],
  providers: [GoodsResolver, GoodsService, ShopService],
  exports: [GoodsService],
})
export class GoodsModule {}
