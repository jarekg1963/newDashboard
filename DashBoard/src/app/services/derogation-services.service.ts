import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { DerogationItem } from '../shared/DerogationItem';

@Injectable({
  providedIn: 'root'
})
export class DerogationServicesService {


  constructor(private _http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })};

  getDerogationHeaders() {
    return this._http.get('http://localhost:5000/api/DerogationHeader' )
    .pipe(retry(1), catchError(this.errorHandl));
  }

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

getDerogationHeadersDaty(url: string) {
  return this._http.get(url)
  .pipe(retry(1), catchError(this.errorHandl));
}

getDerogationItemsByid(id: number) {
  return this._http.get('http://localhost:5000/api/DerogationItem/' + id )
  .pipe(retry(1), catchError(this.errorHandl));
}


getDerogationItemId(id: number) {
  return this._http.get('http://localhost:5000/api/DerogationItem/GetById/' + id)
  .pipe(retry(1), catchError(this.errorHandl));
}

deleteDerodationItem(id: number) {
  return this._http.delete('http://localhost:5000/api/DerogationItem/' + id)
  .pipe(retry(1), catchError(this.errorHandl));
}

updateDerogationItem(id, item: DerogationItem): Observable<any> {
return this._http.put('http://localhost:5000/api/DerogationItem/' + id , item, this.httpOptions)
.pipe(retry(1), catchError(this.errorHandl));
}

addDerogationHeader(hd: DerogationHeaders): Observable<any>{
  return this._http.post('http://localhost:5000/api/DerogationHeader', hd)
  .pipe(retry(1), catchError(this.errorHandl));
}

deleteDerogationHeader(id: number){
  return this._http.delete('http://localhost:5000/api/DerogationHeader/' + id)
  .pipe(retry(1), catchError(this.errorHandl));

}

addDerogationItem(hd: DerogationHeaders): Observable<any>{
  return this._http.post('http://localhost:5000/api/DerogationItem', hd)
  .pipe(retry(1), catchError(this.errorHandl));
}

}


