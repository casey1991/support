import { Module } from '@nestjs/common';
import { CatsResolvers } from './cat.resolver';
import { CatService } from './cat.service';

@Module({
  providers: [CatService, CatsResolvers],
})
export class CatModule {}
