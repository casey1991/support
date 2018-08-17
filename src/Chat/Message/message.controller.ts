import {
  Controller,
  UseInterceptors,
  UseFilters,
  UseGuards,
  Get,
  Query,
} from '@nestjs/common';
import { Request, Post, Body } from '@nestjs/common';

import { PasswordInterceptor } from '../../Common/Interceptors/password.interceptor';
import { MongooseToObject } from '../../Common/Interceptors/mongoose-to-object.interceptor';
import { HttpExceptionFilter } from '../../Common/Filters/http.exception.filter';
import { MessageService } from './message.service';

// dtos
import { MessageSearchDto } from './dto/message.search.dto';
import { AuthGuard } from '@nestjs/passport';

@UseInterceptors(MongooseToObject, PasswordInterceptor)
@UseFilters(HttpExceptionFilter)
@Controller('chat-message')
export class MessageController {
  constructor(private readonly service: MessageService) {}
  @UseGuards(AuthGuard('jwt'))
  @Post('')
  async createMessage(@Request() req, @Body() message) {
    const currentUser = req.user;
    if (!message.user) {
      message.user = currentUser._id;
    }
    return await this.service.createMessage(message);
  }
  @UseGuards(AuthGuard('jwt'))
  @Get('messages')
  async getMessages(@Request() req, @Query() searchs: MessageSearchDto) {
    this.service.searchMessage(searchs);
  }
}
