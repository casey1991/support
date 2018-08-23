import { Module } from '@nestjs/common';
import { DealController } from './deal.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ShopService } from './deal.service';
import { DealSchema } from './schemas/deal.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Deal', schema: DealSchema }])],
  controllers: [DealController],
  providers: [ShopService],
  exports: [ShopService],
})
export class ShopModule {}
