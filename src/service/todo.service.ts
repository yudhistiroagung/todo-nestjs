import { Inject, Injectable } from '@nestjs/common';
import { TodoRepository } from 'src/domain/todo/TodoRepository';
import { Todo } from 'src/domain/todo/models';

import { TodoRepositoryToken } from 'src/data/module/repository.module';

@Injectable()
export class TodoService {
  constructor(
    @Inject(TodoRepositoryToken)
    private readonly todoRepository: TodoRepository,
  ) {}

  async findAll(): Promise<Todo[]> {
    return this.todoRepository.findAll();
  }

  async add(todo: Omit<Todo, 'id'>): Promise<Todo> {
    return this.todoRepository.addOrUpdate({
      ...todo,
      id: `${new Date().getTime()}`,
    });
  }
}
