import {
  Controller,
  UseInterceptors,
  UseFilters,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { Request, Post, Body, Get, Query } from '@nestjs/common';

import { PasswordInterceptor } from '../../Common/Interceptors/password.interceptor';
import { MongooseToObject } from '../../Common/Interceptors/mongoose-to-object.interceptor';
import { HttpExceptionFilter } from '../../Common/Filters/http.exception.filter';
import { RoomService } from './room.service';

// dtos
import { RoomCreateDto } from './dto/room.create.dto';
import { RoomSearchDto } from './dto/room.search.dto';
import { AuthGuard } from '@nestjs/passport';
import { ValidationPipe } from '../../Common/Pipes/validation.pipe';

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
  @UseGuards(AuthGuard('jwt'))
  @UsePipes(ValidationPipe)
  @Get('rooms')
  async searchRooms(@Request() req, @Query() searchs: RoomSearchDto) {
    const currentUser = req.user;
    if (!searchs._userIds || searchs._userIds.length < 0) {
      searchs._userIds = [currentUser._id];
    }
    return await this.service.searchRooms(searchs);
  }
}
