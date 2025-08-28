export interface TransactionResult
{
  instrument: {
    symbol: string,
    type: string,
  },
  price: number,
  userId: number,
  currency: string,
  tradeDate: Date,
}
