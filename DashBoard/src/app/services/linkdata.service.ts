import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {InternetLinks} from '../shared/InternetLinks';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LinkdataService {

  private readonly API_URL = 'http://localhost:5000/api/InternetLinks';

  dataChange: BehaviorSubject<InternetLinks[]> = new BehaviorSubject<InternetLinks[]>([]);
  dialogData: any;

  constructor(private _http: HttpClient) { }

  get data(): InternetLinks[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

 /** CRUD METHODS */

 getAllInternetLinks(): void {
  this._http.get<InternetLinks[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
}

  // DEMO ONLY, you can find working methods below

  addIssue(issue: InternetLinks): void {
    this.dialogData = issue;
  }

  updateIssue(issue: InternetLinks): void {
    this.dialogData = issue;
  }

  deleteIssue(id: number): void {
    console.log(id);
  }

}
