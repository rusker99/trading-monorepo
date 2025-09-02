import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { BackendModule } from '@trading-monorepo/backend';

async function bootstrap() {
  const app = await NestFactory.create(BackendModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.enableCors();
  const port = process.env.PORT || 4200;
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap().catch((err) => { console.error(err)});
