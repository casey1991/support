import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Goods } from './interfaces/goods.interface';
import { mongoPromiseHandler } from '../Common/utils/mongo-promise-handler';
@Injectable()
export class GoodsService {
  constructor(@InjectModel('User') private readonly GoodsModel: Model<Goods>) {}
}
