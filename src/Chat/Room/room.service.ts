import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room } from './interfaces/room.interface';
import { Injectable } from '@nestjs/common';
import { RoomCreateDto } from './dto/room.create.dto';

@Injectable()
export class RoomService {
  constructor(@InjectModel('Room') private readonly RoomModel: Model<Room>) {}
  async createRoom(room: RoomCreateDto) {
    return await this.RoomModel.create(room);
  }
}
