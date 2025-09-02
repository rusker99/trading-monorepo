import { Inject, Injectable } from '@nestjs/common';
import {
  PositionRequest,
  PositionResult,
} from '@trading-monorepo/core';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../sql/prisma.service';

@Injectable()
export class PositionService {
  @Inject(PrismaService)
  readonly prismaService!: PrismaService;

  findMany(positionRequest?: PositionRequest): Promise<PositionResult[]> {
    const query = `SELECT last, change, symbol, type, "averagePrice", "totalQuantity", "totalCost"
       FROM (
              select "instrumentId", avg(price) "averagePrice", sum(quantity) "totalQuantity", avg(price) * sum(quantity) "totalCost"
              from trading."Transaction"
              group by "instrumentId"
            ) T
              inner join
            (
              SELECT *, MAX(date) OVER (PARTITION BY "instrumentId") as max_date
              FROM trading."Price"
            ) P
            on T."instrumentId" = P."instrumentId"
              inner join trading."Instrument" I on I.id = T."instrumentId"
       where P.date = P."max_date"`;

    let filter = "";
    if (positionRequest?.orderBy) {

      let orderBy = "";
      let order = positionRequest.order === 'DESC' ? 'desc' : 'asc';
      switch (positionRequest.orderBy) {
        case "LAST":
          orderBy = "1";
          break;
        case "SYMBOL":
          orderBy = "3";
          break;
        case "AVERAGE_PRICE":
          orderBy = "4";
          break;
        case "TOTAL_QUANTITY":
          orderBy = "5";
          break;
        case "TOTAL_COST":
          orderBy = "6";
          break;
        case "CHANGE":
        default:
          orderBy = "2";
          order = " desc";
      }

      filter = ` order by ${orderBy} ${order}`;
    }

    return this.prismaService.$queryRaw<PositionResult[]>(Prisma.raw(`${query}${filter}`));
  }
}
