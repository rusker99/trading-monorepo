import { IBaseModel } from '../base/base.model';


export interface IAccountPerformance extends IBaseModel
{
  date: Date,
  amount: number
}
