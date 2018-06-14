import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly UserModel: Model<User>) {}
  async findOneByToken(token: string) {}
  async findOneByEmail(email: string): Promise<User> {
    return await this.UserModel.findOne({ email: email });
  }
  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.UserModel(createUserDto);
    return await createdUser.save();
  }
  async getAll(): Promise<User[]> {
    return await this.UserModel.find().exec();
  }
}
