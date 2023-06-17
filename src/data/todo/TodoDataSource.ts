import { TodoDTO } from './models';

export interface TodoDataSource {
  find: () => Promise<TodoDTO[]>;
  addOrUpdate: (todo: TodoDTO) => Promise<TodoDTO>;
}
