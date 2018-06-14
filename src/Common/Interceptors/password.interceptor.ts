import { Injectable, NestInterceptor, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { map } from 'rxjs/operators';
@Injectable()
export class PasswordInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    call$: Observable<any>,
  ): Observable<any> {
    return call$.pipe(
      map(data => {
        if (_.isArray(data)) {
          const result = data.map(element => {
            const result = element;
            return _.omit(result, ['password']);
          });
          return result;
        } else {
          return data;
        }
      }),
    );
  }
}

//
