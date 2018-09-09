import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// dtos
import { CreateUserDto } from './dto/create-user.dto';
import { FindUserDto } from './dto/findUser.dto';

import { User } from './entities/user.entity';
import { mongoPromiseHandler } from '../Common/utils/mongo-promise-handler';
@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly UserModel: Model<User>) {}
  async findOneByToken(token: string) {}
  async findOneByEmail(email: string): Promise<User> {
    return await this.UserModel.findOne({ email: email }).exec();
  }
  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.UserModel(createUserDto);
    const user = await mongoPromiseHandler(createdUser.save());
    return user;
  }
  async getAll(): Promise<User[]> {
    return await this.UserModel.find().exec();
  }
  async findUser(_id: string): Promise<User> {
    const user = await this.UserModel.findOne({ _id }).exec();
    return user;
  }
  async findUsers() {
    const query = this.UserModel.find({});
    // query.where('_id').in(_ids);
    return await query.exec();
  }
}
