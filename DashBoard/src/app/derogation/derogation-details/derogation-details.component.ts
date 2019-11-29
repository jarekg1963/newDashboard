import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DerogationItem } from 'src/app/shared/DerogationItem';
import { DerogationServicesService } from 'src/app/services/derogation-services.service';
import { CellbuttondetailsComponent } from '../cellbuttondetails/cellbuttondetails.component';

@Component({
  selector: 'app-derogation-details',
  templateUrl: './derogation-details.component.html',
  styleUrls: ['./derogation-details.component.css']
})


export class DerogationDetailsComponent implements OnInit {
  rowData: any;
  columnDefs = [
    { headerName: "derogationId", field: "derogationId", sortable: true, width: 250 },
    { headerName: "modelName", field: "modelName", sortable: true, width: 250 },
   { headerName: "partNo", field: "partNo", sortable: true, width: 250 },

  ];

  dataDerogationHeaders: any;




  constructor( public dialogRef: MatDialogRef<DerogationDetailsComponent>,
               @Inject(MAT_DIALOG_DATA) public data: number,private _derogationService: DerogationServicesService) { }

  ngOnInit() {
    this._derogationService.getDerogationItemsByid(this.data).subscribe(res => {
      this.rowData = res;
      console.log(this.rowData);
    });

  }




  onNoClick(): void {
    this.dialogRef.close();
  }

}
