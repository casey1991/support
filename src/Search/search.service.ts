import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import * as _ from 'lodash';
@Injectable()
export class SearchService {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}
  async create(index: string, type: string, id: string, source: any) {
    return await this.elasticsearchService.getClient().create({
      index: index,
      type: type,
      id: id,
      body: _.omit(source.toJSON(), ['_id']),
    });
  }
  async delete() {}
  async update() {}
}
