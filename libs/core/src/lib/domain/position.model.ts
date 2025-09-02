import { BaseModel } from './base.model';

export interface PositionModel extends BaseModel
{
    instrument: string,
    position: number,
    averagePrice: number,
    marketValue: number,
    dailyPnL: number,
    unrealizedPnL: number
}
