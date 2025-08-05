import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingIndicatorService
{
  private showLoadingIndicatorSubject: Subject<boolean | null>;
  showLoadingIndicatorObservable: Observable<boolean | null>;
  private numberOfProgresses = 0;
  set show(show: boolean | null)
  {
    if (show == null)
    {
      return;
    }
    if (show)
    {
      this.numberOfProgresses ++;
    }
    else
    {
      if (this.numberOfProgresses == 0)
      {
        return;
      }
      this.numberOfProgresses --;
      //restrict trying to hide indicator while having open progresses
      if (this.numberOfProgresses > 0)
      {
        return;
      }
    }

    this.showLoadingIndicatorSubject.next(show);
  }
  get show(): boolean
  {
    return this.numberOfProgresses > 0;
  }
  constructor()
  {
    this.showLoadingIndicatorSubject = new BehaviorSubject<boolean | null>(null);
    this.showLoadingIndicatorObservable = this.showLoadingIndicatorSubject.asObservable();
  }
}
