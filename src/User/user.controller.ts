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
import * as Passport from 'passport';

// services
import { UserService } from './user.service';
// dtos
import { CreateUserDto } from './dto/create-user.dto';
import { FindUserDto } from './dto/findUser.dto';
// interfaces
import { User } from './entities/user.entity';
// interceptors
import { PasswordInterceptor } from '../Common/Interceptors/password.interceptor';
import { MongooseToObject } from '../Common/Interceptors/mongoose-to-object.interceptor';
// pipes
import { ValidationPipe } from '../Common/Pipes/validation.pipe';
// guards
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../Common/Guards/roles.guards';
// decorators
import { Roles } from '../Common/Decorators/roles.decorator';
// filters
import { HttpExceptionFilter } from '../Common/Filters/http.exception.filter';

@UseInterceptors(PasswordInterceptor)
@UseInterceptors(MongooseToObject)
@UseFilters(HttpExceptionFilter)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('users')
  async getAll(): Promise<User[]> {
    console.log(Passport);
    return this.userService.getAll();
  }
  @UsePipes(new ValidationPipe())
  @UseGuards(AuthGuard('jwt'))
  @Get('')
  async findUser(
    @Request() req,
    @Query() findUserDto: FindUserDto,
  ): Promise<User> {
    const currentUser = req.user;
    if (!findUserDto._id) findUserDto._id = currentUser._id;
    return this.userService.findUser(findUserDto._id);
  }

  @UsePipes(new ValidationPipe())
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('superAdmin')
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.userService.create(createUserDto);
  }
}
