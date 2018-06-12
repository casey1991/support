import { Injectable } from '@nestjs/common'

@Injectable()
export class UserService{
    async findOneByToken(token:string){}
    async findOneByEmail(email:string){}
}