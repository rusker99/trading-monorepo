import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { ModelRestService } from '../service/model-rest.service';
import { InstrumentModel } from '@trading-monorepo/core';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'trading-app-trade',
  templateUrl: './trade.component.html',
  styleUrl: './trade.component.css'
})
export class TradeComponent implements OnInit {

  //TODO get symbol from user input to search by
  private symbol = 'RSI';
  chartOption: Observable<EChartsOption>;

  constructor(private restService: ModelRestService) {}
  ngOnInit(): void {
    this.chartOption = this.restService
      .get<InstrumentModel>("Instrument", 1,
        {
          include: {
          // symbol: true,
          //   type: true,
          //   description: true,
          prices: {
            select: {
              last: true,
              bid: true,
              ask: true,
              date: true,
            }
          }},
          where: {
            symbol: this.symbol
          }
        })
      .pipe(
        map(instrument => {

          const prices = instrument.prices;
            return {
              // grid: {
              //   height: 1000
              // },
              xAxis: {
                data: prices?.map(price => price.date?.toString())
              },
              yAxis: {},
              series: [
                {
                  type: 'candlestick',
                  data:
                    prices?.map(price => [price.bid, price.ask, price.bid, price.ask])
                }
              ]
            };

          }
        )
      );
      this.chartOption.subscribe();
  }
}

