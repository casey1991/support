import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room } from './interfaces/room.interface';
import { Injectable } from '@nestjs/common';
import { RoomCreateDto } from './dto/room.create.dto';

@Injectable()
export class ChatService {
  constructor(@InjectModel('User') private readonly UserModel: Model<Room>) {}
  async createRoom(room: RoomCreateDto) {
    return await this.UserModel.create(room);
  }
}
