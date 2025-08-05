import { Component, OnInit } from '@angular/core';
import { ModelRestService } from '../service/model-rest.service';
import { ITransaction } from '@trading-monorepo/core';

@Component({
  selector: 'trading-app-transaction',
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent implements OnInit {

  transactions: ITransaction[] = [];

  constructor(private restService: ModelRestService) {}
  ngOnInit(): void {
    this.restService
      .getAll<ITransaction>("Transaction")
      .subscribe(
        (transactions: ITransaction[]) => this.transactions = transactions )
  }
}
