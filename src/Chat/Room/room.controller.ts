import {
  Controller,
  UseInterceptors,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { Request, Post, Body } from '@nestjs/common';

import { PasswordInterceptor } from '../../Common/Interceptors/password.interceptor';
import { MongooseToObject } from '../../Common/Interceptors/mongoose-to-object.interceptor';
import { HttpExceptionFilter } from '../../Common/Filters/http.exception.filter';
import { RoomService } from './room.service';

// dtos
import { RoomCreateDto } from './dto/room.create.dto';
import { AuthGuard } from '@nestjs/passport';

@UseInterceptors(MongooseToObject, PasswordInterceptor)
@UseFilters(HttpExceptionFilter)
@Controller('chat-room')
export class ChatController {
  constructor(private readonly service: RoomService) {}
  @UseGuards(AuthGuard('jwt'))
  @Post('')
  async createRoom(@Request() req, @Body() room: RoomCreateDto) {
    const currentUser = req.user;
    if (!room.host) {
      room.host = currentUser._id;
    }
    return await this.service.createRoom(room);
  }
}
