import { BaseModel } from './base.model';

export interface QueryOptions {
  select?: any,
  include?: any,
  where?: any,
  orderBy?: any,
}
export interface ModelService
{
  // modelName: ModelName;
  find<T extends BaseModel>(model: T, queryOptions?: QueryOptions): Promise<T>,
  findMany<T extends BaseModel>(modelName: T['modelName'], queryOptions?: QueryOptions): Promise<T[]>,
  createOrUpdate<T extends BaseModel>(model: T, data: Partial<T>): Promise<T>;
  delete<T extends BaseModel>(model: T, id:number): Promise<unknown>;
  // deleteMany(modelName: T['modelName'], ids: number[]): Promise<unknown>;
}

