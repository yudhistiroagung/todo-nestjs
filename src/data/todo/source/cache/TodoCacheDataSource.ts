import { Inject, Injectable } from '@nestjs/common';

import { InMemoryStorage } from '../../../../lib/InMemoryStorage';
import { TodoDataSource } from '../../TodoDataSource';
import { TodoDTO } from '../../models';

import { TodoInMemoryStorage } from '../../../module/cache.module';

@Injectable()
export class TodoCacheDataSource implements TodoDataSource {
  constructor(
    @Inject(TodoInMemoryStorage)
    private readonly todoInMemoryDataSource: InMemoryStorage<TodoDTO>,
  ) {}

  async find(): Promise<TodoDTO[]> {
    return this.todoInMemoryDataSource.findAll();
  }

  async addOrUpdate(todo: TodoDTO): Promise<TodoDTO> {
    return this.todoInMemoryDataSource.addOrUpdate(todo);
  }
}
