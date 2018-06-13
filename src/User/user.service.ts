import { Injectable } from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import {Model} from 'mongoose'
import {CreateUserDto} from './dto/create-user.dto'
import {User} from './interfaces/user.interface'

@Injectable()
export class UserService{
    constructor(@InjectModel() private readonly userModel:Model<User>)
    async findOneByToken(token:string){}
    async findOneByEmail(email:string){}
    async create(createUserDto:CreateUserDto):Promise<User>{
        const createdUser = this.userModel(createUserDto)
        return this.createdUser.save()
    }
}