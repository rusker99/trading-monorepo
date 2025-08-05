import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

@NgModule({
  imports:
    [
      RouterModule.forRoot(appRoutes,
        {
          useHash: true,
          enableTracing: true,
          preloadingStrategy:
          PreloadAllModules
        }),
    ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
