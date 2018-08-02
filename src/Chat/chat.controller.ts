import { Controller, UseInterceptors, UseFilters } from '@nestjs/common';

import { PasswordInterceptor } from '../Common/Interceptors/password.interceptor';
import { MongooseToObject } from '../Common/Interceptors/mongoose-to-object.interceptor';
import { HttpExceptionFilter } from '../Common/Filters/http.exception.filter';

@UseInterceptors(MongooseToObject, PasswordInterceptor)
@UseFilters(HttpExceptionFilter)
@Controller('auth')
export class ChatController {}
