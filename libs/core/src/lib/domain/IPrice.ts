import { IBaseModel } from '../base/base.model';

export interface IPrice  extends IBaseModel
{
  bid: number,
  ask: number,
  date: Date,
  instrumentId: number,
}
