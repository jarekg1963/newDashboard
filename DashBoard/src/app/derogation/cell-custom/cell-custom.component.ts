import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatDialog } from '@angular/material';
import { DerogationDetailsComponent } from '../derogation-details/derogation-details.component'

@Component({
  selector: "app-cell-custom",
  templateUrl: "./cell-custom.component.html",
  styleUrls: ["./cell-custom.component.css"]
})
export class CellCustomComponent implements OnInit {
  data: number;
  params: any;

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  agInit(params) {
    this.params = params;
  }

  ngOnInit() {}

  editRow($event) {
       const params = {
         event: $event,
       };
       this.openDialogDetails();
  }


  viewRow() {
    let rowData = this.params;

  }

  openDialogDetails(): void {
    const dialogRef = this.dialog.open(DerogationDetailsComponent, {
      width: '1000px',
      height: '650px',
      data: this.params.node.data.derogationId
    });


    dialogRef.afterClosed().subscribe(result => {
      this.data = result;
    });
  }

}
