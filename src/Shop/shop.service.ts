import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// dtos
import { ShopCreateDto } from './dto/shop.create.dto';
// interfaces
import { Shop } from './interfaces/shop.interface';
// utils
import { mongoPromiseHandler } from 'Common/utils/mongo-promise-handler';
@Injectable()
export class ShopService {
  constructor(@InjectModel('Shop') private readonly ShopModel: Model<Shop>) {}
  async create(dto: ShopCreateDto): Promise<Shop> {
    return [];
  }
}