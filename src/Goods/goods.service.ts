import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Goods } from './interfaces/goods.interface';
import { GoodsCreateDto } from './dto/goods.create.dto';
@Injectable()
export class GoodsService {
  constructor(
    @InjectModel('Goods') private readonly GoodsModel: Model<Goods>,
  ) {}
  async createGoods(goods = {}) {
    return await this.GoodsModel.create(goods);
  }
  async getGoodss(conditions = {}) {
    return await this.GoodsModel.find(conditions);
  }
  async getGoods(id: String) {
    return await this.GoodsModel.findById(id);
  }
}
