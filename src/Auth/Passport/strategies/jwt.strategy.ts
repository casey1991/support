import  {PassportStrategy} from '@nestjs/passport'
import {ExtractJwt, Strategy} from 'passport-jwt';
import { Injectable,UnauthorizedException } from '@nestjs/common'
import {JwtPayload} from '../interfaces/jwt-payload.interface';


import {UserService} from '../../../User/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(private readonly userService:UserService){
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'secretKey'
        })
    }
    async validate(jwtpayload:JwtPayload,done:Function):Promise<any>{
        const user = this.userService.findOneByEmail(jwtpayload.email)
        if(!user){
            return done(new UnauthorizedException(),false)
        }
        return done(null,user)
    }
}