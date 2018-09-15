import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GoodsSchema } from './schemas/goods.schema';
import { GoodsResolver } from './goods.resolver';
import { GoodsService } from './goods.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Goods', schema: GoodsSchema }]),
  ],
  controllers: [],
  providers: [GoodsResolver],
  exports: [GoodsService],
})
export class UserModule {}
