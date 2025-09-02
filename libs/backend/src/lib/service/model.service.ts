import { BaseModel, PrismaOptions } from '@trading-monorepo/core';

export interface ModelService
{
  // modelName: ModelName;
  find<T extends BaseModel>(model: T, prismaOptions?: PrismaOptions): Promise<T>,
  findMany<T extends BaseModel>(modelName: T['modelName'], prismaOptions?: PrismaOptions): Promise<T[]>,
  // createOrUpdate<T extends BaseModel>(model: T, data?: Partial<T>): Promise<T>;
  create<T extends BaseModel>(model: T): Promise<T>;
  update<T extends BaseModel>(model: T): Promise<T>;
  delete<T extends BaseModel>(model: T, id:number): Promise<unknown>;
  // deleteMany(modelName: T['modelName'], ids: number[]): Promise<unknown>;
}

