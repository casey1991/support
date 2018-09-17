import { Module, forwardRef } from '@nestjs/common';
import { ShopController } from './shop.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { GoodsModule } from '../Goods/goods.module';
import { ShopService } from './shop.service';
import { UserService } from '../User/user.service';
import { ShopResolver } from './shop.resolver';
import { ShopSchema } from './schemas/shop.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Shop', schema: ShopSchema }]),
    forwardRef(() => GoodsModule),
  ],
  controllers: [ShopController],
  providers: [ShopService, UserService, ShopResolver],
  exports: [ShopService],
})
export class ShopModule {}
