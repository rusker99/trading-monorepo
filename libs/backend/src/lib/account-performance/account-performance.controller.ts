import { Controller, Get, Param } from '@nestjs/common';
import { AccountPerformanceService } from './account-performance.service';
import { BaseController } from '../controller/base.controller';


@Controller('account-performance')
export class AccountPerformanceController extends BaseController
{
  constructor(private accountPerformanceService: AccountPerformanceService)
  {
    super(accountPerformanceService);
  }

  @Get(':userId')
  getAllByUserId(@Param('userId') userId: string) {
    return this.accountPerformanceService.findByUserId(Number(userId));
  }

  @Get('/')
  getAll() {
    return this.accountPerformanceService.findMany('AccountPerformance', { select: {date: true, amount: true}} );
  }
}
