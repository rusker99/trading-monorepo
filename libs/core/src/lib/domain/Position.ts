import { IBaseModel } from '../base/base.model';

export interface IPosition  extends IBaseModel
{
    instrument: string,
    position: number,
    averagePrice: number,
    marketValue: number,
    dailyPnL: number,
    unrealizedPnL: number
}
/*

export class Position implements IPosition
{
  averagePrice: number;
  dailyPnL: number;
  id: number;
  instrument: string;
  marketValue: number;
  position: number;
  unrealizedPnL: number;

}
*/
