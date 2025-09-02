import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { BaseController } from './base.controller';
import { ModelDbService } from '../sql/model-db.service';
import { BaseModel, ModelName } from '@trading-monorepo/core';

@Controller(':modelName')
export class DefaultController extends BaseController {
  constructor(modelService: ModelDbService) {
    super(modelService);
  }

  @Get(':id')
  getOne(
    @Param('modelName') modelName: ModelName,
    @Param('id') id: number,
    @Query('prismaOptions') prismaOptions: string
  ): Promise<BaseModel> {
    return this.getOneModel(modelName, id, JSON.parse(prismaOptions));
  }

  @Get('/')
  getAll(
    @Param('modelName') modelName: ModelName,
    @Query('prismaOptions') prismaOptions: string
  ) {
    return this.modelService.findMany(
      modelName,
      prismaOptions ? JSON.parse(prismaOptions) : undefined
    );
  }

  @Post('/')
  postModel(@Body() model: BaseModel) {
    return model?.id ? this.modelService.update(model) : this.modelService.create(model);
  }
}
