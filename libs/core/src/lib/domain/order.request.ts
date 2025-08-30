

export interface OrderRequest {
  action: 'BUY' | 'SELL',
  type: 'LIMIT' | 'MARKET',
  quantity: number,
  highestPrice: number,
}
