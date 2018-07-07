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
} from '@nestjs/common';

// services
import { UserService } from './user.service';
// dtos
import { CreateUserDto } from './dto/create-user.dto';
import { FindUserDto } from './dto/findUser.dto';
// interfaces
import { User } from './interfaces/user.interface';
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

@UseInterceptors(PasswordInterceptor)
@UseInterceptors(MongooseToObject)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('users')
  async getAll(): Promise<User[]> {
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
    if (!findUserDto.userId) findUserDto.userId = currentUser._id;
    return this.userService.findUser(findUserDto);
  }

  @UsePipes(new ValidationPipe())
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Post()
  @Roles('superAdmin')
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.userService.create(createUserDto);
  }
}
