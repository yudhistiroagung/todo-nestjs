import { Todo } from './models';

export interface TodoRepository {
  findAll: () => Promise<Todo[]>;
}
