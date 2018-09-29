import * as jwt from 'jsonwebtoken';
import { Injectable, BadRequestException } from '@nestjs/common';
import { UserService } from '../User/user.service';

import { CreateTokenDto } from './dto/create-token.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async createToken(email: string, password: string) {
    const user = await this.userService.findOneByEmail(email);
    if (!user) {
      throw new BadRequestException('invalid_request', 'invalid_request');
    } else {
      if (user.password === password) {
        const expiresIn = 3600;
        const accessToken = jwt.sign({ email: user.email }, 'secretKey', {
          expiresIn,
        });
        const refreshToken = jwt.sign({ id: user._id }, 'secretKey', {
          expiresIn: 259200,
        });
        return {
          access_token: accessToken,
          token_type: 'bearer',
          expires_in: expiresIn,
          refresh_token: refreshToken,
        };
      }
      throw new BadRequestException();
    }
  }
  async validateUser(email: string): Promise<any> {
    return await this.userService.findOneByEmail(email);
  }
  async validateToken(token: string): Promise<any> {
    const decoded = await jwt.verify(token, 'secretKey');
    if (decoded.email) {
      return await this.validateUser(decoded.email);
    } else {
      return null;
    }
  }
}
