import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef, MatDialog, MatPaginator, MatSort, MatDialogConfig } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';
import { Issue } from 'src/app/shared/issue';
import { merge, Observable, BehaviorSubject, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataSource } from '@angular/cdk/table';
import { AddComponent } from '../exampleIssues/add/add.component';
import { DeleteComponent } from '../exampleIssues/delete/delete.component';
import { EditComponent } from '../exampleIssues/edit/edit.component';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-example-issues',
  templateUrl: './example-issues.component.html',
  styleUrls: ['./example-issues.component.css']
})
export class ExampleIssuesComponent implements OnInit {



displayedColumns = ['id', 'internetLink', 'description', 'remarks', 'internetGroup', 'actions'];


  exampleDatabase: DataService | null;
  dataSource: ExampleDataSource | null;
  index: number;
  id: number;

// konstruktor do modalnego
  // constructor(public dialogRef: MatDialogRef<ExampleIssuesComponent>, public httpClient: HttpClient,
  //             public dialog: MatDialog,
  //             public dataService: DataService,
  //             public toastr: ToastrService) { }


   constructor( public httpClient: HttpClient,
               public dialog: MatDialog,
               public dataService: DataService,
               public toastr: ToastrService) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('filter',  {static: true}) filter: ElementRef;


  ngOnInit() {
    this.loadData();
  }

  onNoClick(): void {
   // this.dialogRef.close();
  }

  refresh() {
    this.loadData();
  }

  public loadData() {
    this.exampleDatabase = new DataService(this.httpClient, this.toastr);
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);

    fromEvent(this.filter.nativeElement, 'keyup')
      // .debounceTime(150)
      // .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }







  addNew(issue: Issue) {



    const dialogRef = this.dialog.open(AddComponent, {
      data: {issue: issue },
      width : "850px",
      height : "580px"
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataService
        this.exampleDatabase.dataChange.value.push(this.dataService.getDialogData());
        this.refreshTable();
      }
    });
  }

  private refreshTable() {
    // Refreshing table using paginator
    // Thanks yeager-j for tips
    // https://github.com/marinantonio/angular-mat-table-crud/issues/12
    this.paginator._changePageSize(this.paginator.pageSize);
  }

  deleteItem(i: number, id: number, internetLink: string, description: string, internetGroup: string) {
    this.index = i;
    this.id = id;
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: {id: id, internetLink: internetLink, description: description, internetGroup: internetGroup}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
        // for delete we use splice in order to remove single object from DataService
        this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
        this.refreshTable();
      }
    });
  }

  startEdit(i: number, id: number, internetLink: string, description: string, internetGroup: string, remarks: string) {
    this.id = id;
    // index row is used just for debugging proposes and can be removed
    this.index = i;
    console.log(this.index);
    const dialogRef = this.dialog.open(EditComponent, {
      data: {id:id, internetLink: internetLink, description: description, internetGroup: internetGroup, remarks: remarks},
      width : "850px",
      height : "580px"
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // When using an edit things are little different, firstly we find record inside DataService by id
        const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
        // Then you update that record using data from dialogData (values you enetered)
        this.exampleDatabase.dataChange.value[foundIndex] = this.dataService.getDialogData();
        // And lastly refresh table
        this.refreshTable();
      }
    });
  }



}

export class ExampleDataSource extends DataSource<Issue> {
  _filterChange = new BehaviorSubject('');

  get filter(): string {
    return this._filterChange.value;
  }

  set filter(filter: string) {
    this._filterChange.next(filter);
  }

  filteredData: Issue[] = [];
  renderedData: Issue[] = [];

  constructor(public _exampleDatabase: DataService,
              public _paginator: MatPaginator,
              public _sort: MatSort) {
    super();
    // Reset to the first page when the user changes the filter.
    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Issue[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._sort.sortChange,
      this._filterChange,
      this._paginator.page
    ];

    this._exampleDatabase.getAllIssues();


    return merge(...displayDataChanges).pipe(map( () => {
        // Filter data
        this.filteredData = this._exampleDatabase.data.slice().filter((issue: Issue) => {
          const searchStr = (issue.id + issue.internetLink + issue.internetGroup + issue.description).toLowerCase();
          return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
        });

        // Sort filtered data
        const sortedData = this.sortData(this.filteredData.slice());

        // Grab the page's slice of the filtered sorted data.
        const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
        this.renderedData = sortedData.splice(startIndex, this._paginator.pageSize);
        return this.renderedData;
      }
    ));
  }

  disconnect() {}


  /** Returns a sorted copy of the database data. */
  sortData(data: Issue[]): Issue[] {
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';

      switch (this._sort.active) {
        case 'id': [propertyA, propertyB] = [a.id, b.id]; break;
        case 'internetLink': [propertyA, propertyB] = [a.internetLink, b.internetLink]; break;
        case 'description': [propertyA, propertyB] = [a.description, b.description]; break;
        case 'internetGroup': [propertyA, propertyB] = [a.internetGroup, b.internetGroup]; break;
        case 'remarks': [propertyA, propertyB] = [a.remarks, b.remarks]; break;
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });
  }
}
