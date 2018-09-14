import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { HttpException } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const httpRequest = ctx.getRequest();
    const httpResponse = ctx.getResponse();

    const errorStatus = exception.getStatus();
    const errorMessage = exception.message;
    return httpResponse.status(errorStatus).json({
      error: errorMessage.error,
      error_description: errorMessage.message,
      error_uri: httpRequest.url,
    });
  }
}
