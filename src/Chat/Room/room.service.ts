import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room } from './interfaces/room.interface';
import { Injectable } from '@nestjs/common';
import { RoomCreateDto } from './dto/room.create.dto';
import { RoomSearchDto } from './dto/room.search.dto';

@Injectable()
export class RoomService {
  constructor(@InjectModel('Room') private readonly RoomModel: Model<Room>) {}
  async createRoom(room = {}) {
    return await this.RoomModel.create(room);
  }
  async joinRoom(roomId: string, userId: string) {
    const result = await this.RoomModel.findByIdAndUpdate(
      roomId,
      { $push: { users: userId } },
      { new: true },
    );
    return result;
  }
  async leaveRoom(roomId: string, userId: string) {}

  async searchRooms(roomSearchDto: RoomSearchDto) {
    const query = this.RoomModel.find({});
    query.where('users').in(roomSearchDto._userIds);
    return await query.exec();
  }
  async getRoom(roomId: string) {
    return await this.RoomModel.findById(roomId);
  }
}
