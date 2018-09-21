import { Module, Global } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JwtStrategy } from './Passport/strategies/jwt.strategy';
import { HttpStrategy } from './Passport/strategies/http.strategy';
import { UserModule } from '../User/user.module';

@Global()
@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [AuthResolver, AuthService, HttpStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
