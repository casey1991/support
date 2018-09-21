import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly UserModel: Model<User>) {}
  async findOneByToken(token: string) {}
  async findOneByEmail(email: string): Promise<User> {
    return await this.UserModel.findOne({ email: email }).exec();
  }
  async create(condition = {}): Promise<User> {
    return await this.UserModel.create(condition);
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
  async updateUser(_id: string, updateData = {}) {
    return await this.UserModel.findOneAndUpdate({ _id }, updateData, {
      new: true,
    });
  }
}
