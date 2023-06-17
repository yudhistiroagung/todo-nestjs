import { Todo } from './models';

export interface TodoRepository {
  findAll: () => Promise<Todo[]>;
  addOrUpdate: (todo: Todo) => Promise<Todo>;
}
