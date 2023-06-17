import { Inject, Injectable } from '@nestjs/common';
import { TodoRepository } from '../../domain/todo/TodoRepository';
import { Todo } from '../../domain/todo/models';
import { TodoDataSource } from './TodoDataSource';

import { TodoCacheDataSourceToken } from '../module/datasource.module';

@Injectable()
export class TodoRepositoryImpl implements TodoRepository {
  constructor(
    @Inject(TodoCacheDataSourceToken)
    private readonly todoCacheDataSource: TodoDataSource,
  ) {}

  async findAll(): Promise<Todo[]> {
    return this.todoCacheDataSource.find();
  }

  async addOrUpdate(todo: Todo): Promise<Todo> {
    return this.todoCacheDataSource.addOrUpdate(todo);
  }
}
