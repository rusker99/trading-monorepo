import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { BaseModel } from '../base/base.model';
import { ModelService, QueryOptions } from '../base/model.service';


@Injectable()
export class ModelDbService implements ModelService {

  @Inject(PrismaService)
  readonly prismaService!: PrismaService;

  createOrUpdate<T extends BaseModel>(model: T, data: Partial<T>): Promise<T> {

    const table = this.prismaService.getPrismaTable(model.modelName);

    return table.upsert({ where: { id: data.id }, create: data, update: data });
  }

  delete<T extends BaseModel>(model: T, id: number): Promise<unknown> {

    const table = this.prismaService.getPrismaTable(model.modelName);

    return table.delete(id);
  }

  find<T extends BaseModel>(model: T, queryOptions?: QueryOptions): Promise<T> {

    const table = this.prismaService.getPrismaTable(model.modelName);
    const payload = {
      where: { id: Number(model.id)},
    };

    return table.findUnique(
      { ...payload, ...queryOptions });
  }

  findMany<T extends BaseModel>(modelName: T['modelName'], queryOptions?: QueryOptions): Promise<T[]> {

    const table = this.prismaService.getPrismaTable(modelName);

    return table.findMany(
      queryOptions || undefined);
  }
}
