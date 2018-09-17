import { Module } from '@nestjs/common';
import { ShopController } from './shop.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ShopService } from './shop.service';
import { UserService } from '../User/user.service';
import { ShopResolver } from './shop.resolver';
import { ShopSchema } from './schemas/shop.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Shop', schema: ShopSchema }])],
  controllers: [ShopController],
  providers: [ShopService, UserService, ShopResolver],
  exports: [ShopService],
})
export class ShopModule {}
