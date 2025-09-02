import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Prisma } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit
{
  constructor() {
    super({
      log: ['query', 'info', 'warn', 'error'],
    });

    this.$on('query' as never, (e: Prisma.QueryEvent) => {
      console.log(`Query: ${e.query}`);
      console.log(`Params: ${e.params}`);
      console.log(`Duration: ${e.duration}ms`);
    })
  }

  async onModuleInit() {
    await this.$connect();
  }

  getPrismaTableName(modelName: string): keyof PrismaService {
    const tableName = modelName;
    console.log(`tableName: ${String(tableName)}`);

    return tableName as keyof PrismaService;
  }

  getPrismaTable(modelName: string): any {
    const name = this.getPrismaTableName(modelName);
    return this[name];
  }
}
