import * as jwt from 'jsonwebtoken';
import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  Pipe,
  UsePipes,
  UseFilters,
} from '@nestjs/common';

import { CreateTokenDto } from './dto/create-token.dto';
import { SignUpDto } from './dto/signup.dto';

import { User } from '../User/entities/user.entity';

import { AuthService } from './auth.service';
import { PasswordInterceptor } from '../Common/Interceptors/password.interceptor';
import { UserService } from '../User/user.service';
import { ValidationPipe } from '../Common/Pipes/validation.pipe';
import { MongooseToObject } from '../Common/Interceptors/mongoose-to-object.interceptor';
import { HttpExceptionFilter } from '../Common/Filters/http.exception.filter';

@UseInterceptors(MongooseToObject, PasswordInterceptor)
@UseFilters(HttpExceptionFilter)
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}
  /**
   * create token for exit account
   * @param createTokenDto
   */
  @Post('token')
  async createToken(@Body() createTokenDto: CreateTokenDto) {
    return await this.authService.createToken(createTokenDto);
  }

  /**
   * signup new account
   */
  @UsePipes(new ValidationPipe())
  @Post()
  async signUp(@Body() signupDto: SignUpDto): Promise<User> {
    return await this.userService.create(signupDto);
  }
}
