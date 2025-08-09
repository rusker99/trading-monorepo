import { IBaseModel } from '../base/base.model';
import { IPrice } from './IPrice';

export interface IInstrument  extends IBaseModel
{
  symbol: string,
  last: number,
  bid: number
  ask: number
  type: string,
  description: string,
  prices?: IPrice[],
}
