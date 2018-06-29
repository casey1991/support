import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  async findOneByToken(token: string) {}
  async findOneByEmail(email: string): Promise<UserEntity> {
    const queryBuilder = this.userRepository.createQueryBuilder();
    return null;
  }
  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const userEntity = new UserEntity();
    userEntity.email = createUserDto.email;
    userEntity.name = createUserDto.name;
    userEntity.password = createUserDto.password;
    const entityResult = await this.userRepository.save(userEntity);
    return entityResult;
  }
  async getAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }
}
