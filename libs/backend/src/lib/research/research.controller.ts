import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ResearchFilterRequest, ResearchResult } from '@trading-monorepo/core';
import { ResearchService } from './research.service';

@Controller('research')
export class ResearchController {
  constructor(private readonly researchService: ResearchService) {}
  @HttpCode(200)
  @Post('/')
  research(@Body() researchFilter?: ResearchFilterRequest): Promise<ResearchResult[]> {
    return this.researchService.findMany(researchFilter);
  }
}
