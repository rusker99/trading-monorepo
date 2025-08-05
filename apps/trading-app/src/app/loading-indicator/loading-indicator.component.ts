import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadingIndicatorService } from '../service/loading-indicator.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'trading-app-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.css'],
})
export class LoadingIndicatorComponent implements OnInit, OnDestroy {
  //this is needed to remove scroll bar
  private origOverflow = document.body.style.overflow;

  protected show: boolean | null = false;
  private subscription: Subscription | undefined;

  constructor(private loadingIndicatorService: LoadingIndicatorService) {}

  ngOnInit(): void {
    this.subscription =
      this.loadingIndicatorService.showLoadingIndicatorObservable.subscribe(
        (show: boolean | null) => {
          this.show = show;
          //adding overfrow = hidden will remove scroll bar from the background
          if (this.show) {
            document.body.style.overflow = 'hidden';
          } else {
            document.body.style.overflow = this.origOverflow;
          }
        }
      );
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }
}
