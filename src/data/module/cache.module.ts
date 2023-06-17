import { Module, Provider } from '@nestjs/common';

import { InMemoryStorage } from 'src/lib/InMemoryStorage';
import { TodoDTO } from '../todo/models';

export const TodoInMemoryStorage = 'TodoInMemoryStorage';

const modules: Provider[] = [
  {
    provide: TodoInMemoryStorage,
    useFactory: () => new InMemoryStorage<TodoDTO>((item) => item.id),
  },
];

@Module({
  providers: modules,
  exports: modules,
})
export class CacheModule {}
