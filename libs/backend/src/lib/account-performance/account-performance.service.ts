import { Injectable } from '@nestjs/common';
import { ModelDbService } from '../sql/model-db.service';
import { ModelService } from '../service/model.service';
import { AccountPerformanceModel } from '@trading-monorepo/core';

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
