import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry } from 'rxjs';
import { HttpService } from './http.service';
import { TokenService } from './token.service';


@Injectable({
  providedIn: 'root',
})
export class RestService extends HttpService {

  @Inject(TokenService)
  private tokenService!: TokenService

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  doPost<T>(
    url: string,
    body: any | null,
    options?: { headers?: HttpHeaders | { [header: string]: string | string[]; } }): Observable<T> {

    if (this.tokenService && typeof (this.tokenService) !== 'undefined') {
      this.tokenService.extendSession();
    }

    return this.httpClient.post<T>(url, body, options)
      .pipe
      (
        catchError(this.getErrorHandler())
      );
  }

  doGetAll<T>(url: string): Observable<T[]> {

    if (this.tokenService && typeof (this.tokenService) !== 'undefined') {
      this.tokenService.extendSession();
    }

    return this.httpClient.get<T[]>(url)
      .pipe
      (
        retry(3),
        catchError(this.getErrorHandler())
      );
  }

  doGet<T>(url: string): Observable<T> {

    if (this.tokenService && typeof (this.tokenService) !== 'undefined') {
      this.tokenService.extendSession();
    }

    return this.httpClient.get<T>(url)
      .pipe
      (
        retry(3),

        catchError(this.getErrorHandler())
      );

  }
}
