import { BaseModel } from './base.model';
import { PriceModel } from './price.model';

export interface InstrumentModel extends BaseModel
{
  symbol: string,
  priceChange: number,
  type: string,
  description: string,
  prices?: PriceModel[],
}
