import { Controller, Get, Post, Body } from '@nestjs/common';
import { TodoService } from 'src/service/todo.service';
import { Todo } from '../../domain/todo/models';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Post()
  async add(@Body() todo: Omit<Todo, 'id'>): Promise<Todo> {
    return this.todoService.add(todo);
  }
}
