import { Controller, Get } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from '../domain/todo/models';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }
}
