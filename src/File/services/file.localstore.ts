import { Injectable } from '@nestjs/common';
import * as fs from 'fs-extra';

@Injectable()
export class FileLocalStore {
  writeFileAsync(path, name, data) {
    const pathPrefix = process.cwd() + '/assets/';
    const extraPath = pathPrefix + path + '/' + name;
    return new Promise((resolve, reject) => {
      fs.outputFile(extraPath, data, error => {
        if (error) reject(error);
        resolve(extraPath);
      });
    });
  }
}
