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
import { ShopService } from './shop.service';
// dtos
import { ShopCreateDto } from './dto/shop.create.dto';
// interfaces
import { Shop } from './interfaces/shop.interface';
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
@Controller('user')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}
}
