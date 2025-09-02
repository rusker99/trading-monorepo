import { ModelService } from '../service/model.service';
import { BaseModel, ModelName, PrismaOptions } from '@trading-monorepo/core';

export abstract class BaseController {
  protected constructor(protected modelService: ModelService) {}

  getOneModel(modelName: ModelName, id: number, prismaOptions?: PrismaOptions): Promise<BaseModel> {
    return this.modelService.find({ modelName, id }, prismaOptions);
  }
}
