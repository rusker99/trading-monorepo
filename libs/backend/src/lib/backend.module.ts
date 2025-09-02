import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AccountPerformanceService } from './account-performance/account-performance.service';
import { AccountPerformanceController } from './account-performance/account-performance.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ResearchController } from './research/research.controller';
import { ResearchService } from './research/research.service';
import { PositionController } from './position/position.controller';
import { PositionService } from './position/position.service';
import { DefaultController } from './controller/default.controller';
import { PrismaService } from './sql/prisma.service';
import { ModelDbService } from './sql/model-db.service';
import { SocketService } from './service/socket.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'trading-app'),
    }),
  ],
  controllers: [
    AppController,
    AccountPerformanceController,
    ResearchController,
    PositionController,
    // default controller has to be the last declaration here
    // otherwise it will overwrite more-specific mappings
    DefaultController,
  ],
  providers: [
    AccountPerformanceService,
    ResearchService,
    PrismaService,
    ModelDbService,
    PositionService,
    SocketService,
  ],
})
export class BackendModule {}
