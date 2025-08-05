import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBaseModel, ModelName } from '@trading-monorepo/core';
import { Observable } from 'rxjs';

/*
export interface ModelIoServiceConfig {
  modelName: Model;
  restSubpath: string;
}

const modelIoConfig: ModelIoServiceConfig[] = [
  {
    modelName: "AccountPerformance",
    restSubpath: "account-performance",
  }
]

*/

@Injectable({
  providedIn: 'root'
})


export class ModelIoService {

  private modelIoConfigMap: Map<ModelName, string>;

  constructor(protected readonly httpClient: HttpClient) {
/*
    this.modelIoConfigMap = modelIoConfig.reduce((previousValue, currentValue) =>
    previousValue.set(currentValue.modelName, currentValue.restSubpath), new Map());
*/
  }

  public query<T extends IBaseModel>(modelName: string, id: number, query: any): Observable<T> {

/*
    const subPath = this.modelIoConfigMap.get(modelName);

    if (!subPath) {
        throw new Error(`Cannot determine the subpath for ${modelName}`);
    }
*/

    return this.httpClient.post<T>(`/api/model`, {model: modelName, query: query});
  }


}
