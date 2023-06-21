import { Module } from '@nestjs/common';

import { AppService } from '../app.service';
import { TodoService } from './todo.service';

import { DataModule } from 'src/data/module/data.module';

const modules = [AppService, TodoService];

@Module({
  imports: [DataModule],
  providers: modules,
  exports: modules,
})
export class ServiceModule {}
