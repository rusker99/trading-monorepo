import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AccountPerformanceComponent } from './account-performance/account-performance/account-performance.component';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TradeComponent } from './trade/trade.component';
import { ResearchComponent } from './research/research.component';
import { ModelIoService } from './service/model-io.service';
import { TransactionComponent } from './transaction/transaction.component';
import { ResearchFormComponent } from './research/research-form/research-form.component';
import { ResearchResultComponent } from './research/research-result/research-result.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PositionsComponent } from './portfolio/positions/positions.component';
import { TradeFormComponent } from './trade/trade-form/trade-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingIndicatorComponent,
    PageNotFoundComponent,
    AccountPerformanceComponent,
    DashboardComponent,
    PortfolioComponent,
    TradeComponent,
    ResearchComponent,
    TransactionComponent,
    ResearchFormComponent,
    ResearchResultComponent,
    PositionsComponent,
    TradeFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule.forRoot({ echarts }),
    ReactiveFormsModule,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi()), ModelIoService],
  bootstrap: [AppComponent],
})
export class TradingAppModule {}
