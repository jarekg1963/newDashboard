import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatDialog } from '@angular/material';
import { DerogationDetailsComponent } from '../derogation-details/derogation-details.component'
import { ConfirmationdialogComponent } from 'src/app/tools/confirmationdialog/confirmationdialog.component';
import { DerogationServicesService } from 'src/app/services/derogation-services.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-cell-custom",
  templateUrl: "./cell-custom.component.html",
  styleUrls: ["./cell-custom.component.css"]
})
export class CellCustomComponent implements OnInit {
  data: number;
  params: any;

  constructor(private http: HttpClient, public dialog: MatDialog,  private _derogationService: DerogationServicesService,
    private toastr: ToastrService) {}

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
      width: '1100px',
      height: '680px',
      data: this.params.node.data.derogationId
    });


    dialogRef.afterClosed().subscribe(result => {
      this.data = result;
    });
  }

  deleteHeader($event): void {

     const params = {
       event: $event
     };
     const dialogRef = this.dialog.open(ConfirmationdialogComponent, {
      width: "350px",
      data: "Do you confirm the deletion of this data?"
    });

     dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("Id do skasowania " + this.params.node.data.derogationId);
        this._derogationService.deleteDerogationHeader(this.params.node.data.derogationId).subscribe(data => {
        this.toastr.success('Deleted  ', "Nr " + this.params.node.data.derogationId);
      },
      (error => {
      this.toastr.error('Not OK ',  error);
      })
      );
    }
  });
}


  deleteDerogationItem(idHeader) {

    return this._derogationService.addDerogationHeader(idHeader).subscribe(data => {
      this.toastr.success('Deleted ', 'OK');
    });

  }



}
