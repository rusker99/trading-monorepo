import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { ModelRestService } from '../service/model-rest.service';
import { InstrumentModel, PriceModel } from '@trading-monorepo/core';
import {
  BehaviorSubject,
  concatMap,
  filter,
  map,
  Observable,
  Subject,
  tap,
} from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'trading-app-trade',
  templateUrl: './trade.component.html',
  styleUrl: './trade.component.css',
})
export class TradeComponent implements OnInit {
  formGroup: FormGroup;
  chartOptionObservable: Observable<EChartsOption>;
  instrumentObservable: Observable<InstrumentModel>;
  instrumentSubject: Subject<InstrumentModel>;
  symbolObservable: Observable<string>;
  symbolSubject: Subject<string>;

  constructor(
    private restService: ModelRestService,
    protected formBuilder: FormBuilder
  ) {
    this.formGroup = formBuilder.group({
      symbol: [''],
    });

    this.instrumentSubject = new BehaviorSubject(null);
    this.instrumentObservable = this.instrumentSubject.asObservable();
  }

  ngOnInit(): void {

    this.symbolSubject = new BehaviorSubject(null);
    this.symbolObservable = this.symbolSubject.asObservable();

    this.chartOptionObservable = this.symbolObservable
      .pipe(
        tap((value) => {
          if (!value) {
            this.instrumentSubject.next(null);
          }
        }),
        filter((value) => !!value),
        concatMap(this.getInstrument),
        tap((instrument) => this.instrumentSubject.next(instrument)),
        filter((instrument) => !!instrument),
        concatMap(({ id }) =>
          this.restService.getAll<PriceModel>('Price', {
            where: {
              instrumentId: id,
            },
          })
        ),
      map(prices => {
        return {
          // grid: {
          //   height: 1000
          // },
          xAxis: {
            data: prices?.map((price) => price.date?.toString()),
          },
          yAxis: {},
          series: [
            {
              type: 'candlestick',
              data: prices?.map((price) => [
                price.bid,
                price.ask,
                price.bid,
                price.ask,
              ]),
            },
          ],
        };
      })
      );

    this.chartOptionObservable.subscribe();
  }

  getInstrument = (symbol: string): Observable<InstrumentModel> => {
    return this.restService.getAll<InstrumentModel>('Instrument', {
      where: {
        symbol: symbol,
      },
    }).pipe(
      map(instruments => instruments?.length ? instruments.at(0) : null),
    );
  };

  fetchInstrument(symbol: string) {

    symbol = symbol.toUpperCase();
    this.formGroup.get('symbol').setValue(symbol);
    console.log(`symbol: ${symbol}`);

    this.symbolSubject.next(symbol);
  }
}

