import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModelRestService } from '../../service/model-rest.service';
import { IAccountPerformance } from '@trading-monorepo/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'trading-app-account-performance',
  templateUrl: './account-performance.component.html',
  styleUrl: './account-performance.component.css',
})
export class AccountPerformanceComponent implements OnInit {
  accountPerformances: IAccountPerformance[] = [];
  chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      data: [],
    },
    yAxis: {
      position: 'right',
      type: 'value',
    },
    series: [
      {
        data: [],
        type: 'line',
      },
    ],
  };

  constructor(private restService: ModelRestService) {}
  ngOnInit(): void {
    this.restService
      .getAll<IAccountPerformance>("AccountPerformance")
      .subscribe(
        (accountPerformances: IAccountPerformance[]) => {
          this.accountPerformances = accountPerformances;

          this.chartOption = {
            xAxis: {
              type: 'category',
              data: this.accountPerformances?.map(accountPerformance => String(accountPerformance.accountPerformanceDate)),
            },
            yAxis: {
              position: 'right',
              type: 'value',
            },
            series: [
              {
                data: this.accountPerformances?.map(accountPerformance => accountPerformance.amount),
                type: 'line',
              },
            ],
          };

        }
      );
  }
}
