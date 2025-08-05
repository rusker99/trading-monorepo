import { IBaseModel } from '../base/base.model';

export interface ITransaction  extends IBaseModel
{
    symbol: string,
    quantity: number,
    price: number,
    userId: number,
    currency: string,
    tradeDate: Date,
    type: string,
}
