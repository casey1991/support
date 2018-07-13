import { Injectable, NestInterceptor, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { map } from 'rxjs/operators';
@Injectable()
export class Localize implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    call$: Observable<any>,
  ): Observable<any> {
    return call$.pipe(
      map(data => {
        if (_.isArray(data)) {
          const result = data.map(element => {
            if (element.hasOwnProperty('_doc')) {
              return element.toObject();
            }
            return element;
          });
          return result;
        } else {
          if (data.hasOwnProperty('_doc')) {
            return data.toObject();
          }
          return data;
        }
      }),
    );
  }
}

//
