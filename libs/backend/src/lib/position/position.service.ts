import { Injectable } from '@nestjs/common';
import { IModelService, ModelService } from '@trading-monorepo/core';

@Injectable()
export class PositionService extends ModelService implements IModelService
{
}
