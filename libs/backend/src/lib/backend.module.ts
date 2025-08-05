import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AccountPerformanceService } from './account-performance/account-performance.service';
import { AccountPerformanceController } from './account-performance/account-performance.controller';
import { ModelService, PrismaService } from '@trading-monorepo/core';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { DefaultController } from '@trading-monorepo/core';
import { ResearchController } from './research/research.controller';
import { ResearchService } from './research/research.service';

@Module({
  imports:[
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'trading-app'),
    }),
  ],
  controllers: [AppController,
  AccountPerformanceController,
    ResearchController,
    DefaultController],
  providers: [AccountPerformanceService,
    ResearchService,
    PrismaService,
    ModelService],
})
export class BackendModule {}
