import * as jwt from 'jsonwebtoken';
import { Controller, Post, Body, UseInterceptors } from '@nestjs/common';

import { CreateTokenDto } from './dto/create-token.dto';
import { AuthService } from './auth.service';
import { PasswordInterceptor } from '../Common/Interceptors/password.interceptor';

@UseInterceptors(PasswordInterceptor)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('token')
  async createToken(@Body() createTokenDto: CreateTokenDto) {
    return await this.authService.createToken(createTokenDto);
  }
}
