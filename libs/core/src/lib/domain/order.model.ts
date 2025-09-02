import { BaseModel } from './base.model';

export interface OrderModel extends BaseModel {
  action: 'BUY' | 'SELL',
  type: 'LIMIT' | 'MARKET',
  quantity: number,
  limitPrice: number,
  status: 'NEW' | 'FILLED',
  instrumentId: number,
}
