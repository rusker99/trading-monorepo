import { IBaseModel } from '../base/base.model';

export interface IInstrument  extends IBaseModel
{
  symbol: string,
  last: number,
  bid: number
  ask: number
  type: string,
  description: string,
}
