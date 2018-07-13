import { HttpException } from '@nestjs/common';
export const mongoPromiseHandler = function(promise): Promise<any> {
  return new Promise((resolve, reject) => {
    promise.then(data => {
      resolve(data);
    });
    promise.catch(error => {
      reject(new HttpException(error.message, error.code));
    });
  });
};
