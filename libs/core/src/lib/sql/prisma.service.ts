import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ModelName } from '../base/base.model';

@Injectable()
export class PrismaService extends PrismaClient
{
  constructor() {
    super({
      log: ['query', 'info', 'warn', 'error'],
    });
  }
  private tables: Map<ModelName, string> = new Map([
    ['AccountPerformance', 'accountPerformance'],
    ['transaction', 'transaction']]);

  getPrismaTableName(modelName: string): keyof PrismaService {
    // const tableName = this.tables.get(modelName);
    // if (!tableName)
    // {
    //   throw new Error(`No table name for ${modelName}`);
    // }
    // if (!Object.hasOwn(this, tableName))
    // {
    //   throw new Error(`No table name for ${modelName}`);
    // }

    const tableName = modelName;
    console.log(`tableName: ${String(tableName)}`);

    return tableName as keyof PrismaService;
  }

  getPrismaTable(modelName: string): any {
    const name = this.getPrismaTableName(modelName);
    return this[name];
  }
}
