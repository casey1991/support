import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// dtos
import { DealCreateDto } from './dto/deal.create.dto';
// interfaces
import { Deal } from './interfaces/deal.interface';

@Injectable()
export class DealService {
  constructor(@InjectModel('Deal') private readonly Model: Model<Deal>) {}
  async create(dto: DealCreateDto): Promise<Deal> {
    return [];
  }
}
