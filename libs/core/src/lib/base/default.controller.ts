import { ModelService } from './model.service';
import { Controller, Get, Param } from '@nestjs/common';
import { IBaseModel, ModelName } from './base.model';
import { BaseController } from './base.controller';

@Controller(':modelName')
export class DefaultController extends BaseController {
  constructor(modelService: ModelService) {
    super(modelService);
  }

  @Get(':id')
  getOne(@Param('modelName') modelName: ModelName, @Param('id') id: number): Promise<IBaseModel> {
    return this.getOneModel(modelName, id);
  }

  @Get('/')
  getAll(@Param('modelName') modelName: ModelName) {
    return this.modelService.findMany(modelName );
  }
}
