import { LoggerService } from '@nestjs/common';
export class Logger implements LoggerService {
  log(message: string) {
    console.log(message);
  }
  error(message: string, trace: string) {
    console.log(message);
  }
  warn(message: string) {
    console.log(message);
  }
}
