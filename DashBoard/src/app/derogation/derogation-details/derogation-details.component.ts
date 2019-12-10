import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig, MatDialog } from '@angular/material';
import { DerogationItem } from 'src/app/shared/DerogationItem';
import { DerogationServicesService } from 'src/app/services/derogation-services.service';
import { CellbuttondetailsComponent } from '../cellbuttondetails/cellbuttondetails.component';
import { AddnewderogationitemComponent } from '../addnewderogationitem/addnewderogationitem.component';


@Component({
  selector: 'app-derogation-details',
  templateUrl: './derogation-details.component.html',
  styleUrls: ['./derogation-details.component.css']
})


export class DerogationDetailsComponent implements OnInit {
  dData: any;
  deogationId: number;


  columnDefs = [
    {
      headerName: "Actions",
      field: "action",
      cellRendererFramework: CellbuttondetailsComponent,
      width: 130
    },
    { headerName: "derogationId", field: "derogationId", sortable: true, width: 50 },
    { headerName: "modelName", field: "modelName", sortable: true, width: 150 },
   { headerName: "partNo", field: "partNo", sortable: true, width: 150 },
   { headerName: "workOrder", field: "workOrder", sortable: true, width: 100 },
   { headerName: "quantity", field: "quantity", sortable: true, width: 100 },
   { headerName: "partNoDesc", field: "partNoDesc", sortable: true, width: 200 },
   { headerName: "productCode", field: "productCode", sortable: true, width: 200 },
   { headerName: "action", field: "action", sortable: true, width: 200 },
   { headerName: "id", field: "id", sortable: true, width: 150 },


  ];

  dataDerogationHeaders: any;




  constructor( public dialogRef: MatDialogRef<DerogationDetailsComponent>, public dialog: MatDialog,
               @Inject(MAT_DIALOG_DATA) public data: number,private _derogationService: DerogationServicesService) { }

  ngOnInit() {
   this.onRefreshData();

  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  onaddNewClick() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.width = "1150px";
    dialogConfig.height = "680px";
    dialogConfig.autoFocus = true;
    // dane transportowane do formularza
    dialogConfig.data = this.deogationId;

    this.dialog.open(AddnewderogationitemComponent, dialogConfig);
    this.onRefreshData();
  }

  onRefreshData() {
    this._derogationService.getDerogationItemsByid(this.data).subscribe(res => {
      this.dData = res;
      this.deogationId = this.dData[0].derogationId;
    });
  }

}
