import { Module } from '@nestjs/common';
import { DealController } from './deal.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DealService } from './deal.service';
import { DealSchema } from './schemas/deal.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Deal', schema: DealSchema }])],
  controllers: [DealController],
  providers: [DealService],
  exports: [DealService],
})
export class DealModule {}
