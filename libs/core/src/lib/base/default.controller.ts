import { ModelService } from './model.service';
import { Controller, Get, Param, Query } from '@nestjs/common';
import { IBaseModel, ModelName } from './base.model';
import { BaseController } from './base.controller';

@Controller(':modelName')
export class DefaultController extends BaseController {
  constructor(modelService: ModelService) {
    super(modelService);
  }

  @Get(':id')
  getOne(@Param('modelName') modelName: ModelName, @Param('id') id: number, @Query('queryOptions') queryOptions: string): Promise<IBaseModel> {

    return this.getOneModel(modelName, id, JSON.parse(queryOptions));
  }

  @Get('/')
  getAll(@Param('modelName') modelName: ModelName, @Query('queryOptions') queryOptions: string) {

    return this.modelService.findMany(modelName, JSON.parse(queryOptions));
  }
}
