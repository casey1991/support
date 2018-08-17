import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from './interfaces/message.interface';
import { Injectable } from '@nestjs/common';
import { MessageCreateDto } from './dto/message.create.dto';
import { MessageSearchDto } from './dto/message.search.dto';

@Injectable()
export class MessageService {
  constructor(@InjectModel('Message') private readonly Model: Model<Message>) {}
  async createMessage(message: MessageCreateDto) {
    return await this.Model.create(message);
  }
  async searchMessage(searchs: MessageSearchDto) {
    const room = await this.Model.find({});
    if (room) {
    }
    return [];
  }
}
