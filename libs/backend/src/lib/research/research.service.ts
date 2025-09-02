import { Inject, Injectable } from '@nestjs/common';
import {
  ResearchFilterRequest,
  ResearchResult,
} from '@trading-monorepo/core';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../sql/prisma.service';

@Injectable()
export class ResearchService {
  @Inject(PrismaService)
  readonly prismaService!: PrismaService;

  findMany(researchFilter?: ResearchFilterRequest): Promise<ResearchResult[]> {
    const query = `SELECT last, bid, ask, change, "instrumentId", symbol, type
       FROM (
              SELECT *, MAX(date) OVER (PARTITION BY "instrumentId") as max_date
              FROM trading."Price"
            ) P
              inner join trading."Instrument" I on P."instrumentId" = I.id
       WHERE P.date = P."max_date"`;

    let filter = ``;
    let varCount = 0;
    const values = [];
    if (researchFilter?.highestPrice) {
      filter = ` ${filter} and last <= $${++varCount}`;
      values.push(Number(researchFilter?.highestPrice));
    }
    if (researchFilter?.lowestPrice) {
      filter = ` ${filter} and last >= $${++varCount}`;
      values.push(Number(researchFilter?.lowestPrice));
    }
    if (researchFilter?.type) {
      filter = ` ${filter} and type = $${++varCount}`;
      values.push(researchFilter?.type);
    }

    filter = ` ${filter} order by change ${
      researchFilter?.losers ? ' asc ' : ' desc'
    }`;

    const fullQuery: Prisma.Sql = Prisma.raw(`${query}${filter}`);
    fullQuery.values.length = 0;
    fullQuery.values.push(...values);

    console.log(fullQuery.values);

    return this.prismaService.$queryRaw<ResearchResult[]>(fullQuery);
  }
}
