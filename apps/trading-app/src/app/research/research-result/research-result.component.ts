import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResearchFilterRequest, PositionResult, ResearchResult } from '@trading-monorepo/core';
import { BehaviorSubject, catchError, distinctUntilChanged, Observable, of, Subject, switchMap, tap } from 'rxjs';

@Component({
  selector: 'trading-app-research-result',
  templateUrl: './research-result.component.html',
  styleUrl: './research-result.component.css'
})
export class ResearchResultComponent implements OnInit {

  researchResultObservable: Observable<ResearchResult[]>;
  private researchFilterSubject: Subject<ResearchFilterRequest>;
  private researchFilterObservable: Observable<ResearchFilterRequest>;
  constructor(protected readonly httpClient: HttpClient) {
    this.researchFilterSubject = new BehaviorSubject(null);
    this.researchFilterObservable = this.researchFilterSubject.asObservable();
  }

  ngOnInit() {
    this.researchResultObservable = this.researchFilterObservable.pipe(
      distinctUntilChanged(),
      switchMap((researchFilter) =>
        !researchFilter
          ? of([])
          : this.httpClient
              .post<PositionResult[]>('/api/research', researchFilter)
              .pipe(
                catchError((err) => {
                  console.error(err);
                  return of([])
                })
              )
      ),
      tap((results) => console.log(`result length=${results.length}`))
    );
    this.researchFilterObservable.subscribe();
  }
  onSearch(researchFilter:  ResearchFilterRequest) {
    this.researchFilterSubject.next(researchFilter);
  }

  onReset() {
    this.researchFilterSubject.next(null);
  }
}
