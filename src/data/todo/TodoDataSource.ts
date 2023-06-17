import { TodoDTO } from './models';

export interface TodoDataSource {
  find(): Promise<TodoDTO[]>;
}
