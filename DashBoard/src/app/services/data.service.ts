import { InternetLinks } from "./../shared/InternetLinks";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Issue } from "../shared/issue";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root"
})
export class DataService {
  // private readonly API_URL = 'https://api.github.com/repos/angular/angular/issues';

  private readonly API_URL = "http://localhost:5000/api/InternetLinks/";

  dataChange: BehaviorSubject<Issue[]> = new BehaviorSubject<Issue[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient, private toastr: ToastrService) {}

  get data(): Issue[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS */
  getAllIssues(): void {
    this.httpClient.get<Issue[]>(this.API_URL).subscribe(
      data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + " " + error.message);
      }
    );
  }

  // DEMO ONLY, you can find working methods below

  // updateIssue(issue: Issue): void {
  //   this.dialogData = issue;
  // }

  addIssue(Item: InternetLinks): void {
    this.httpClient.post(this.API_URL, Item).subscribe(
      data => {
        this.dialogData = Item;
        this.toastr.success('Successfully added');
      },
      (err: HttpErrorResponse) => {
        this.toastr.error('Error occurred. Details: ' + err.name + ' ' + err.message);
      }
    );
  }

  //  DELETE METHOD
  deleteIssue(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe(
      data => {
         this.toastr.success('Successfully deleted');
      },
      (err: HttpErrorResponse) => {
         this.toastr.error('Error occurred. Details: ' + err.name + ' ' + err.message);
      }
    );
  }

  //  UPDATE, PUT METHOD
  updateIssue(Item: InternetLinks): void {
    this.httpClient.put(this.API_URL + Item.id, Item).subscribe(
      data => {
        this.dialogData = Item;
        this.toastr.success('Successfully edited');
      },
      (err: HttpErrorResponse) => {
          this.toastr.error('Error occurred. Details: ' + err.name + ' ' + err.message);
      }
    );
  }
}

/* REAL LIFE CRUD Methods I've used in my projects. ToasterService uses Material Toasts for displaying messages:
    ADD, POST METHOD
    addItem(kanbanItem: KanbanItem): void {
    this.httpClient.post(this.API_URL, kanbanItem).subscribe(data => {
      this.dialogData = kanbanItem;
      this.toasterService.showToaster('Successfully added', 3000);
      },
      (err: HttpErrorResponse) => {
      this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
    });
   }
    UPDATE, PUT METHOD
     updateItem(kanbanItem: KanbanItem): void {
    this.httpClient.put(this.API_URL + kanbanItem.id, kanbanItem).subscribe(data => {
        this.dialogData = kanbanItem;
        this.toasterService.showToaster('Successfully edited', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }
   DELETE METHOD
  deleteItem(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe(data => {
      console.log(data['']);
        this.toasterService.showToaster('Successfully deleted', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }
*/
