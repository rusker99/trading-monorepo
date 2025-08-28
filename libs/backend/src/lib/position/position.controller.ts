import { Controller, Get, Query } from '@nestjs/common';
import { PositionService } from './position.service';

@Controller('position')
export class PositionController {
  constructor(private readonly positionService: PositionService) {}

  @Get('/')
  getAll(@Query('queryOptions') queryOptions?: string) {
    return this.positionService.findMany(
      queryOptions ? JSON.parse(queryOptions) : undefined
    );
  }
}
