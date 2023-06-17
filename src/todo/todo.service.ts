import { Inject, Injectable } from '@nestjs/common';
import { TodoRepository } from 'src/domain/todo/TodoRepository';
import { Todo } from 'src/domain/todo/models';

import { TodoRepositoryToken } from '../data/module/repository.module';

@Injectable()
export class TodoService {
  constructor(
    @Inject(TodoRepositoryToken)
    private readonly todoRepository: TodoRepository,
  ) {}

  async findAll(): Promise<Todo[]> {
    return this.todoRepository.findAll();
  }
}
