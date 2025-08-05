import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccountPerformanceComponent } from './account-performance/account-performance/account-performance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TradeComponent } from './trade/trade.component';
import { ResearchComponent } from './research/research.component';
import { TransactionComponent } from './transaction/transaction.component';

export const appRoutes: Route[] =
  [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'dashboard'
    },
    {
      path: 'dashboard',
      pathMatch: 'full',
      component: DashboardComponent
    },
    {
        path: 'account-performance',
        // pathMatch: 'full',
        component: AccountPerformanceComponent,
    },
    {
      path: 'portfolio',
      // pathMatch: 'full',
      component: PortfolioComponent,
    },
    {
      path: 'transaction',
      // pathMatch: 'full',
      component: TransactionComponent,
    },
    {
      path: 'trade',
      // pathMatch: 'full',
      component: TradeComponent,
    },
    {
      path: 'research',
      // pathMatch: 'full',
      component: ResearchComponent,
    },
    {path: '**', component: PageNotFoundComponent},
  ];
