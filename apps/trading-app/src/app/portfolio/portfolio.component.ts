import { Component, OnInit } from '@angular/core';
import { PositionResult } from '@trading-monorepo/core';
import { RestService } from '../service/rest.service';

@Component({
  selector: 'trading-app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {

  positionResults: PositionResult[] = [];
  constructor(private restService: RestService) {}

  ngOnInit(): void {
    this.restService
      .doGetAll<PositionResult>(`/api/position`)
      .subscribe(
        (positionResults: PositionResult[]) => this.positionResults = positionResults )

  }

}
