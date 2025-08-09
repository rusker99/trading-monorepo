import { Injectable } from '@nestjs/common';
import {
  IInstrument,
  ModelService,
  ResearchFilter,
  ResearchResult
} from '@trading-monorepo/core';

@Injectable()
export class ResearchService
{
  constructor(private modelService: ModelService) {
  }

  findMany(researchFilter: ResearchFilter): Promise<ResearchResult[]> {

    const lastFilter = !!researchFilter.highestPrice && !!researchFilter.lowestPrice ? {
      lte: researchFilter.highestPrice ? researchFilter.highestPrice : undefined,
      gte: researchFilter.lowestPrice ? researchFilter.lowestPrice : undefined,
    } : undefined;

    const where = {
      last: lastFilter,
      type: researchFilter.type || undefined,
    }
    return this.modelService.findMany<IInstrument>('Instrument', {
        where,
        orderBy:
          {
            last: researchFilter.losers ? 'desc' : 'asc'
          }
      }
    ).then(instruments => instruments.map(instrument => (
      {
        type: instrument.type,
        change: 111,
        askPrice: instrument.ask,
        bidPrice: instrument.bid,
        lastPrice: instrument.last,
        symbol: instrument.symbol,
      } as ResearchResult)));
  }

}
