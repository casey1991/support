import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import * as passport from 'passport';

@Injectable()
export class SocketAuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const socket = context.switchToWs().getClient;
    return true;
  }
}
