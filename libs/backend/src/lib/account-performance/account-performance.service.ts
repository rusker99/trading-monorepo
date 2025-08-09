import { Injectable } from '@nestjs/common';
import { IAccountPerformance, IModelService, ModelService } from '@trading-monorepo/core';

@Injectable()
export class AccountPerformanceService extends ModelService implements IModelService
{
  findByUserId(userId: number): Promise<IAccountPerformance[]> {
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
