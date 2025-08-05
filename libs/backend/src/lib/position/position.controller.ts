import { Controller } from '@nestjs/common';
import { PositionService } from './position.service';
import { BaseController } from '@trading-monorepo/core';


@Controller('position')
export class PositionController extends BaseController
{
  constructor(positionService: PositionService)
  {
    super(positionService);
  }
}
