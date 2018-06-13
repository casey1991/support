import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtPayload } from '../interfaces/jwt-payload.interface';

import { AuthService } from '../../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secretKey',
    });
  }
  async validate(jwtpayload: JwtPayload, done: Function): Promise<any> {
    const user = this.authService.validateUser(jwtpayload.email);
    if (!user) {
      return done(new UnauthorizedException(), false);
    }
    return done(null, user);
  }
}
