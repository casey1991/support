import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

import { UserModule } from '../User/user.module'
import { HttpStrategy } from './Passport/strategies/http.strategy'

@Module({
    controllers:[AuthController],
    providers:[AuthService,HttpStrategy],
    imports:[UserModule]
})
export class AuthModule {}