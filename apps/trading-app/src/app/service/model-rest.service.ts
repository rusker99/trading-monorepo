import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBaseModel, ModelName } from '@trading-monorepo/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModelRestService {
  constructor(protected readonly httpClient: HttpClient) {}

  getAll<T extends IBaseModel>(modelName: ModelName): Observable<T[]> {
    let modelPath = '';
    switch (modelName) {
      case 'AccountPerformance':
        modelPath = 'account-performance';
        break;
      case 'Transaction':
        modelPath = 'transaction';
        break;
      default:
        throw new Error(`Cannot determine the model path for ${modelName}`);
    }
    return this.httpClient.get<T[]>(`/api/${modelPath}`);
  }

  get<T extends IBaseModel>(modelName: ModelName, id?: number): Observable<T> {
    let modelPath = '';
    switch (modelName) {
      case 'AccountPerformance':
        modelPath = 'account-performance';
        break;
      default:
        throw new Error(`Cannot determine the model path for ${modelName}`);
    }
    return this.httpClient.get<T>(`/api/${modelPath}${id ? '/' + id : ''}`);
  }
}
