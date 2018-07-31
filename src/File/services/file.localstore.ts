import { Injectable } from '@nestjs/common';
import * as fs from 'fs-extra';

@Injectable()
export class FileLocalStore {
  writeFileAsync(path, name, data) {
    const filePath = path + '/' + name;
    return new Promise((resolve, reject) => {
      fs.outputFile(filePath, data, error => {
        if (error) reject(error);
        resolve(filePath);
      });
    });
  }
}
