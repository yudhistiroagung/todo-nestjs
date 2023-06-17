import { Module, Provider } from '@nestjs/common';

import { DataSourceModule } from './datasource.module';
import { TodoRepositoryImpl } from '../todo/TodoRepositoryImpl';

export const TodoRepositoryToken = 'TodoRepositoryToken';

const modules: Provider[] = [
  {
    provide: TodoRepositoryToken,
    useClass: TodoRepositoryImpl,
  },
];

@Module({
  imports: [DataSourceModule],
  providers: modules,
  exports: modules,
})
export class RepositoryModule {}
