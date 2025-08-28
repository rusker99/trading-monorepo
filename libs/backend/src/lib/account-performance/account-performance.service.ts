import { Injectable } from '@nestjs/common';
import { AccountPerformanceModel, ModelService, ModelDbService } from '@trading-monorepo/core';

@Injectable()
export class AccountPerformanceService extends ModelDbService implements ModelService
{
  findByUserId(userId: number): Promise<AccountPerformanceModel[]> {
    const table = this.prismaService.getPrismaTable('AccountPerformance');

    return table.findMany(
      {select
          :
          {
            date: true
          },
        where: { userId: userId}
      }
    );
  }

}
