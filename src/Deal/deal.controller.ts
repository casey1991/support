import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  UseInterceptors,
  UseGuards,
  Query,
  Request,
  UseFilters,
} from '@nestjs/common';

// services
import { DealService } from './deal.service';
// dtos
import { DealCreateDto } from './dto/deal.create.dto';
// interfaces
import { Deal } from './interfaces/deal.interface';
// interceptors
import { PasswordInterceptor } from 'Common/Interceptors/password.interceptor';
import { MongooseToObject } from 'Common/Interceptors/mongoose-to-object.interceptor';
// pipes
import { ValidationPipe } from 'Common/Pipes/validation.pipe';
// guards
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'Common/Guards/roles.guards';
// filters
import { HttpExceptionFilter } from 'Common/Filters/http.exception.filter';

@UseInterceptors(PasswordInterceptor)
@UseInterceptors(MongooseToObject)
@UseFilters(HttpExceptionFilter)
@Controller('deal')
export class DealController {
  constructor(private readonly service: DealService) {}
  @UseGuards(AuthGuard('jwt'))
  @UsePipes(ValidationPipe)
  @Post()
  async createDeal(@Request() req, @Body() deal: DealCreateDto) {}
}
