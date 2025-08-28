import { BaseModel } from '../base/base.model';

export interface TransactionModel extends BaseModel
{
    symbol: string,
    quantity: number,
    price: number,
    userId: number,
    currency: string,
    tradeDate: Date,
    type: string,
}
