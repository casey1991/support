import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// dtos
import { DealCreateDto } from './dto/deal.create.dto';
// interfaces
import { Deal } from './interfaces/deal.interface';
// utils
import { mongoPromiseHandler } from 'Common/utils/mongo-promise-handler';
@Injectable()
export class ShopService {
  constructor(@InjectModel('Shop') private readonly ShopModel: Model<Deal>) {}
  async create(dto: DealCreateDto): Promise<Deal> {
    return [];
  }
}
