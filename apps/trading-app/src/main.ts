import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TradingAppModule } from './app/trading-app.module';
// import 'zone.js';

platformBrowserDynamic()
  .bootstrapModule(TradingAppModule)
  .catch((err) => console.error(err));
