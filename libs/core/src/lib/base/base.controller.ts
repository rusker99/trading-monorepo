import { IModelService, QueryOptions } from './model.service';
import { IBaseModel, ModelName } from './base.model';

export abstract class BaseController {
  protected constructor(protected modelService: IModelService) {}

  getOneModel(modelName: ModelName, id: number, queryOptions?: QueryOptions): Promise<IBaseModel> {
    return this.modelService.find({ modelName, id }, queryOptions);
  }
}
