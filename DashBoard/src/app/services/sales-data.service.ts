import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SalesDataService {

  constructor(private _http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })};

  getOrders(pageIndex: number, pageSize: number) {
    return this._http.get('http://localhost:5000/api/order/' + pageIndex + '/' + pageSize)
    .pipe(retry(1), catchError(this.errorHandl));
  }

  getOrdersByCustomer(n: number) {
    return this._http.get('http://localhost:5000/api/order/bycustomer/' + n)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  getOrdersByState() {
    return this._http.get('http://localhost:5000/api/order/bystate/')
    .pipe(retry(1), catchError(this.errorHandl));
  }

  getServers() {
    return this._http.get('http://localhost:5000/api/server')
    .pipe(retry(1), catchError(this.errorHandl));
  }




 // Error handling

 errorHandl(error) {
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}


}

