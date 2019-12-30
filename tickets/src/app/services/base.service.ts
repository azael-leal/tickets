import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';

export const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type':  'application/json',
    'Content-Security-Policy': `script-src 'self' https://apis.google.com`,
  })
};

export const handleError = (error: HttpErrorResponse) => {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
    return throwError('An error occurred:' + error.error.message);
  }

  // The backend returned an unsuccessful response code.
  // The response body may contain clues as to what went wrong,
  console.error(
    `Backend returned code ${error.status}, ` +
    `body was: ${error.error}`);

  // return an observable with a user-facing error message
  return throwError ('Something bad happened; please try again later.');
};

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private IP_MAIN = environment.SERVER_URL;

  public IP_TICKETS = this.IP_MAIN + environment.API_TICKETS;
}
