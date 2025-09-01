import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { BaseModel, ModelName } from './base.model';
import { BaseController } from './base.controller';
import { ModelDbService } from '../sql/model-db.service';

@Controller(':modelName')
export class DefaultController extends BaseController {
  constructor(modelService: ModelDbService) {
    super(modelService);
  }

  @Get(':id')
  getOne(
    @Param('modelName') modelName: ModelName,
    @Param('id') id: number,
    @Query('queryOptions') queryOptions: string
  ): Promise<BaseModel> {
    return this.getOneModel(modelName, id, JSON.parse(queryOptions));
  }

  @Get('/')
  getAll(
    @Param('modelName') modelName: ModelName,
    @Query('queryOptions') queryOptions: string
  ) {
    return this.modelService.findMany(
      modelName,
      queryOptions ? JSON.parse(queryOptions) : undefined
    );
  }

  @Post('/')
  postModel(@Body() model: BaseModel) {
    return model?.id ? this.modelService.update(model) : this.modelService.create(model);
  }
}
