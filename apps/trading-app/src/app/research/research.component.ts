import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { TransactionModel, ResearchFilterRequest, PositionResult } from '@trading-monorepo/core';
import { ModelRestService } from '../service/model-rest.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'trading-app-research',
  templateUrl: './research.component.html',
  styleUrl: './research.component.css'
})
export class ResearchComponent {

  // researchFormObservable: Observable<any>;
  // researchResultObservable: Observable<PositionResult[]>;

  // constructor(protected readonly httpClient: HttpClient) {
  //   this.researchResultObservable = httpClient.get<PositionResult[]>('/api/research');
  // }
  // onSearch(researchFilter:  ResearchFilterRequest) {
  //
  // }
}
