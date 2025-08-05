import { IModelService } from './model.service';
import { IBaseModel, ModelName } from './base.model';

export abstract class BaseController {
  protected constructor(protected modelService: IModelService) {}

  getOneModel(modelName: ModelName, id: number): Promise<IBaseModel> {
    return this.modelService.find({ modelName, id });
  }
}
