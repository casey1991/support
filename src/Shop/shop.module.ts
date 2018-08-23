import { Module } from '@nestjs/common';
import { ShopController } from './shop.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ShopService } from './shop.service';
import { ShopSchema } from './schemas/shop.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Shop', schema: ShopSchema }])],
  controllers: [ShopController],
  providers: [ShopService],
  exports: [ShopService],
})
export class ShopModule {}
