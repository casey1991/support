import {
  Controller,
  UseInterceptors,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { Request, Post, Body } from '@nestjs/common';

import { PasswordInterceptor } from '../Common/Interceptors/password.interceptor';
import { MongooseToObject } from '../Common/Interceptors/mongoose-to-object.interceptor';
import { HttpExceptionFilter } from '../Common/Filters/http.exception.filter';
import { ChatService } from './chat.service';

// dtos
import { RoomCreateDto } from './dto/room.create.dto';
import { AuthGuard } from '@nestjs/passport';

@UseInterceptors(MongooseToObject, PasswordInterceptor)
@UseFilters(HttpExceptionFilter)
@Controller('auth')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}
  @UseGuards(AuthGuard('jwt'))
  @Post('')
  createRoom(@Request() req, @Body() room: RoomCreateDto) {
    const currentUser = req.user;
    if (!room.host) {
      room.host = currentUser._id;
    }
    this.chatService.createRoom(room);
  }
}
