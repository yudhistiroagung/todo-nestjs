import { Module } from '@nestjs/common';

import { controllers } from './controller';
import { ServiceModule } from './service/service.module';

@Module({
  imports: [ServiceModule],
  controllers: controllers,
})
export class AppModule {}
