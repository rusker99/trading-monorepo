import { Controller, Get, Query } from '@nestjs/common';
import { PositionService } from './position.service';

@Controller('position')
export class PositionController {
  constructor(private readonly positionService: PositionService) {}

  @Get('/')
  getAll(@Query('prismaOptions') prismaOptions?: string) {
    return this.positionService.findMany(
      prismaOptions ? JSON.parse(prismaOptions) : undefined
    );
  }
}
