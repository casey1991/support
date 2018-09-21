import { Module, Injectable } from '@nestjs/common';
import { SearchService } from './search.service';
import { ElasticsearchModule } from '@nestjs/elasticsearch';

@Module({
  imports: [
    ElasticsearchModule.register({
      host: 'localhost:9200',
      log: 'trace',
    }),
  ],
  providers: [SearchService],
  exports: [SearchService],
})
export class SearchModule {}
