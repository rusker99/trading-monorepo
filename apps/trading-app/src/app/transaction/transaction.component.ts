import { Component, OnInit } from '@angular/core';
import { TransactionModel, TransactionResult } from '@trading-monorepo/core';
import { RestService } from '../service/rest.service';

@Component({
  selector: 'trading-app-transaction',
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent implements OnInit {

  transactions: Partial<TransactionModel>[] = [];

  constructor(private restService: RestService) {}
  ngOnInit(): void {
    this.restService
      .doGetAll<TransactionResult>(`/api/transaction?queryOptions=${encodeURIComponent(
        JSON.stringify({include: {instrument: {select: {symbol: true}}}}))}`)
      .subscribe(
        (transactions: TransactionResult[]) =>
          this.transactions = transactions.map(transaction =>
          ({
            ...transaction,
            symbol: transaction.instrument.symbol,
            type: transaction.instrument.symbol
          })) )
  }
}

