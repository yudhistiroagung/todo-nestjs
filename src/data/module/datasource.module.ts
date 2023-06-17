import { Module, Provider } from '@nestjs/common';

import { CacheModule } from './cache.module';
import { TodoCacheDataSource } from '../todo/source/cache/TodoCacheDataSource';
export const TodoCacheDataSourceToken = 'TodoCacheDataSourceToken';

const modules: Provider[] = [
  {
    provide: TodoCacheDataSourceToken,
    useClass: TodoCacheDataSource,
  },
];

@Module({
  imports: [CacheModule],
  providers: modules,
  exports: modules,
})
export class DataSourceModule {}
