import { BaseModel } from '../base/base.model';

export interface PriceModel extends BaseModel
{
  bid: number,
  ask: number,
  date: Date,
  instrumentId: number,
}
