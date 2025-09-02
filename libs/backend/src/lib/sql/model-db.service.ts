import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ModelService } from '../service/model.service';
import { BaseModel, PrismaOptions } from '@trading-monorepo/core';

@Injectable()
export class ModelDbService implements ModelService {

  @Inject(PrismaService)
  readonly prismaService!: PrismaService;

  createOrUpdate<T extends BaseModel>(model: T, data?: Partial<T>): Promise<T> {

    const table = this.prismaService.getPrismaTable(model.modelName);

    return table.upsert({ where: { id: model.id }, create: data || model, update: data || model});
  }

  create<T extends BaseModel>(model: T): Promise<T> {

    const table = this.prismaService.getPrismaTable(model.modelName);

    return table.create({ data: { ...model, modelName: undefined } });
  }

  update<T extends BaseModel>(model: T): Promise<T> {

    const table = this.prismaService.getPrismaTable(model.modelName);

    return table.update({ where: { id: model.id }, data: { ...model, modelName: undefined }});
  }

  delete<T extends BaseModel>(model: T, id: number): Promise<unknown> {

    const table = this.prismaService.getPrismaTable(model.modelName);

    return table.delete(id);
  }

  find<T extends BaseModel>(model: T, prismaOptions?: PrismaOptions): Promise<T> {

    const table = this.prismaService.getPrismaTable(model.modelName);
    const payload = {
      where: { id: Number(model.id)},
    };

    return table.findUnique(
      { ...payload, ...prismaOptions });
  }

  findMany<T extends BaseModel>(modelName: T['modelName'], prismaOptions?: PrismaOptions): Promise<T[]> {

    const table = this.prismaService.getPrismaTable(modelName);

    return table.findMany(
      prismaOptions || undefined);
  }
}
