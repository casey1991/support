import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from '../User/user.service';
import { JwtStrategy } from './Passport/strategies/jwt.strategy';

import { UserModule } from '../User/user.module';

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
