import { Inject } from '@nestjs/common';
import { PrismaService } from '../sql/prisma.service';
import { IBaseModel } from './base.model';


export interface QueryOptions {
  select?: any,
  include?: any,
  where?: any,
  orderBy?: any,
}
export interface IModelService
{
  // modelName: ModelName;
  find<T extends IBaseModel>(model: T, queryOptions?: QueryOptions): Promise<T>,
  findMany<T extends IBaseModel>(modelName: T['modelName'], queryOptions?: QueryOptions): Promise<T[]>,
  createOrUpdate<T extends IBaseModel>(model: T, data: Partial<T>): Promise<T>;
  delete<T extends IBaseModel>(model: T, id:number): Promise<unknown>;
  // deleteMany(modelName: T['modelName'], ids: number[]): Promise<unknown>;
}

  export class ModelService implements IModelService
{
  @Inject(PrismaService)
  protected prismaService!: PrismaService;

  createOrUpdate<T extends IBaseModel>(model: T, data: Partial<T>): Promise<T> {

    const table = this.prismaService.getPrismaTable(model.modelName);

    return table.upsert({ where: { id: data.id }, create: data, update: data });
  }

  delete<T extends IBaseModel>(model: T, id: number): Promise<unknown> {

    const table = this.prismaService.getPrismaTable(model.modelName);

    return table.delete(id);
  }

  find<T extends IBaseModel>(model: T, queryOptions?: QueryOptions): Promise<T> {

    const table = this.prismaService.getPrismaTable(model.modelName);
    const payload = {
      where: { id: Number(model.id)},
    };

    return table.findUnique(
      { ...payload, ...queryOptions });
  }

  findMany<T extends IBaseModel>(modelName: T['modelName'], queryOptions?: QueryOptions): Promise<T[]> {

    const table = this.prismaService.getPrismaTable(modelName);

    return table.findMany(
      queryOptions);
  }
}
