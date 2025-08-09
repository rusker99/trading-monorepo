import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResearchFilter, ResearchResult } from '@trading-monorepo/core';
import { BehaviorSubject, distinctUntilChanged, Observable, of, Subject, switchMap, tap } from 'rxjs';

@Component({
  selector: 'trading-app-research-result',
  templateUrl: './research-result.component.html',
  styleUrl: './research-result.component.css'
})
export class ResearchResultComponent implements OnInit {

  // @Output()
  researchResultObservable: Observable<ResearchResult[]>;
  private researchFilterSubject: Subject<ResearchFilter>;
  private researchFilterObservable: Observable<ResearchFilter>;
  constructor(protected readonly httpClient: HttpClient) {
    this.researchFilterSubject = new BehaviorSubject(null);
    this.researchFilterObservable = this.researchFilterSubject.asObservable();
  }

  ngOnInit() {
    this.researchResultObservable = this.researchFilterObservable.pipe(
      distinctUntilChanged(),
      switchMap(researchFilter =>
        !researchFilter ? of([]) : this.httpClient.post<ResearchResult[]>('/api/research', researchFilter)
      ),
      tap(results => console.log(`results=${results}`))
    );
    this.researchFilterObservable.subscribe();
  }
  onSearch(researchFilter:  ResearchFilter) {
    this.researchFilterSubject.next(researchFilter);
  }

  onReset() {
    this.researchFilterSubject.next(null);
  }
}
