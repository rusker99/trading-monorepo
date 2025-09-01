import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseModel, ModelName, QueryOptions } from '@trading-monorepo/core';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root',
})
export class ModelRestService extends RestService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getAll<T extends BaseModel>(modelName: ModelName, queryOptions?: QueryOptions): Observable<T[]> {

    const modelPath = this.getModelPath(modelName);
    return this.doGetAll<T>(`/api/${modelPath}?queryOptions=${queryOptions ? encodeURIComponent(JSON.stringify(queryOptions)) : ''}`);
  }

  get<T extends BaseModel>(modelName: ModelName, id: number, queryOptions?: QueryOptions): Observable<T> {

    const modelPath = this.getModelPath(modelName);
    return this.doGet<T>(`/api/${modelPath}${id ? '/' + id : ''}?queryOptions=${queryOptions ? encodeURIComponent(JSON.stringify(queryOptions)) : ''}`);
  }


  post<T extends BaseModel>(model: Partial<T>, postOptions?: QueryOptions): Observable<T> {

    const modelPath = this.getModelPath(model.modelName);
    return this.doPost<T>(`/api/${modelPath}`, postOptions || model);
  }

  private getModelPath(modelName: ModelName): string {
    let modelPath: string;
    switch (modelName) {
      default:
        modelPath = modelName.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
    }
    console.log(`model path: ${modelPath}`);
    return modelPath;
  }
}
