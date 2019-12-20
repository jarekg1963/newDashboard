import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { DerogationServicesService } from 'src/app/services/derogation-services.service';
import { CellCustomComponent } from 'src/app/derogation/cell-custom/cell-custom.component';
import { AllCommunityModules } from '@ag-grid-community/all-modules';
import { UsercellbuttonComponent } from '../usercellbutton/usercellbutton.component';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
  rowTblUsers: any;
  modules = AllCommunityModules;

  columnDefs = [
    {
      headerName: "Actions",
      field: "action",
      cellRendererFramework: UsercellbuttonComponent,
      width: 200
    },
    {
      headerName: "userId",
      field: "userId",
      sortable: true,
      filter: true,
      width: 100
    },
    {
      headerName: "fullName",
      field: "fullName",
      width: 300,
      sortable: true,
    },
    {
      headerName: "email",
      field: "email",
      sortable: true,
      filter: true,
      width: 200
    },
    {
      headerName: "position",
      field: "position",
      sortable: true,
      filter: true,
      width: 150
    }
  ];

  constructor(public dialogRef: MatDialogRef<UserslistComponent>,
              private _derogationservice: DerogationServicesService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this._derogationservice.getTblUsers().subscribe(res => {
      this.rowTblUsers = res;
      console.log(this.rowTblUsers);
    });
  }

  onNoClick() {
  this.dialogRef.close();
}

onaddNewClick() {

}
}
