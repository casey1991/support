import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room } from './interfaces/room.interface';
import { Injectable } from '@nestjs/common';
import { RoomCreateDto } from './dto/room.create.dto';
import { MessageCreateDto } from './dto/message.create.dto';

@Injectable()
export class ChatService {
  constructor(@InjectModel('Room') private readonly UserModel: Model<Room>) {}
  async createRoom(room: RoomCreateDto) {
    return await this.UserModel.create(room);
  }
  async createMessage(message: MessageCreateDto) {
    const room = await this.UserModel.findById(message.room);
    delete message.room;
    if (room) {
      room.messages.push(message);
    }
    return await room.save();
  }
}
