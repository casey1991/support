import * as jwt from 'jsonwebtoken';
import { Injectable, ForbiddenException } from '@nestjs/common';
import { UserService } from '../User/user.service';

import { CreateTokenDto } from './dto/create-token.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async createToken(createTokenDto: CreateTokenDto) {
    const user = await this.userService.findOneByEmail(createTokenDto.email);
    if (!user) {
      throw new ForbiddenException();
    } else {
      if (user.password === createTokenDto.password) {
        const expiresIn = 3600;
        const accessToken = jwt.sign({ email: user.email }, 'secretKey', {
          expiresIn,
        });
        return { accessToken, expiresIn };
      }
      throw new ForbiddenException();
    }
  }
  async validateUser(email: string): Promise<any> {
    return await this.userService.findOneByEmail(email);
  }
}
