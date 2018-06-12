import { Injectable } from '@nestjs/common'
import { UserService } from '../User/user.service'

@Injectable()
export class AuthService{
    constructor(private readonly userService: UserService){}
    
    async validateUser(token:string): Promise<any>{
        return await this.userService.findOneByToken(token);
    }
}