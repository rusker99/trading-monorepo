import { Body, Controller, Post } from '@nestjs/common';
import { ResearchFilter } from '@trading-monorepo/core';
import { ResearchService } from './research.service';

@Controller('research')
export class ResearchController {
  constructor(private readonly researchService: ResearchService) {}
  @Post('/')
  research(@Body() researchFilter: ResearchFilter) {
    return this.researchService.findMany(researchFilter);
  }
}
