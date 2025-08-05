import { IBaseModel } from '../base/base.model';


export interface IAccountPerformance extends IBaseModel
{
  accountPerformanceDate: Date,
  amount: number
}
