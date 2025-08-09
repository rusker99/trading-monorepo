import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBaseModel, ModelName, QueryOptions } from '@trading-monorepo/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModelRestService {
  constructor(protected readonly httpClient: HttpClient) {}

  getAll<T extends IBaseModel>(modelName: ModelName, queryOptions?: QueryOptions): Observable<T[]> {
    let modelPath = '';
    switch (modelName) {
      case 'AccountPerformance':
        modelPath = 'account-performance';
        break;
      case 'Transaction':
        modelPath = 'transaction';
        break;
      case 'Instrument':
        modelPath = 'instrument';
        break;
      default:
        throw new Error(`Cannot determine the model path for ${modelName}`);
    }
    return this.httpClient.get<T[]>(`/api/${modelPath}?queryOptions=${encodeURIComponent(JSON.stringify(queryOptions))}`);
  }

  get<T extends IBaseModel>(modelName: ModelName, id: number, queryOptions?: QueryOptions): Observable<T> {
    let modelPath = '';
    switch (modelName) {
      case 'AccountPerformance':
        modelPath = 'account-performance';
        break;
      case 'Instrument':
        modelPath = 'instrument';
        break;
      default:
        throw new Error(`Cannot determine the model path for ${modelName}`);
    }
    return this.httpClient.get<T>(`/api/${modelPath}${id ? '/' + id : ''}?queryOptions=${encodeURIComponent(JSON.stringify(queryOptions))}`);
  }
}
