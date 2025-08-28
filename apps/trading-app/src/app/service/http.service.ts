import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EMPTY, Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(protected readonly httpClient: HttpClient) {

  }

  protected getErrorHandler() {
    return (err: HttpErrorResponse): Observable<never> => {
      console.error(err);

      if (err.status === 401) {

        //TODO: logout and redirect to login when login is enabled
        return EMPTY;
      }

      let message;
      if (err.status === 412) {
        message = err.error['errorMessage'];
      }
      else if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        message = 'An error occurred:' + err.error.message;
      }
      else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        message = `Backend returned code ${err.status}, body was: ${JSON.stringify(err.error)}`;
      }

      return throwError(message);
    };
  }

}
