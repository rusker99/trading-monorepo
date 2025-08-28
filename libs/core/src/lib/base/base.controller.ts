import { BaseModel, ModelName } from './base.model';
import { ModelService, QueryOptions } from './model.service';

export abstract class BaseController {
  protected constructor(protected modelService: ModelService) {}

  getOneModel(modelName: ModelName, id: number, queryOptions?: QueryOptions): Promise<BaseModel> {
    return this.modelService.find({ modelName, id }, queryOptions);
  }
}
