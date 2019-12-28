import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MatDialogConfig, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { DerogationServicesService } from 'src/app/services/derogation-services.service';

import { AllCommunityModules } from '@ag-grid-community/all-modules';
import { UsercellbuttonComponent } from '../usercellbutton/usercellbutton.component';
import { UseraddnewComponent } from '../useraddnew/useraddnew.component';
import { CommonfuncionsService } from 'src/app/services/commonfuncions.service';


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
              private _derogationservice: DerogationServicesService,
              public dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: number,
              private eventEmitterService: CommonfuncionsService
              ) { }



  ngOnInit() {
    this.getUsers();
    if (this.eventEmitterService.subsVar === undefined) {
    this.eventEmitterService.subsVar = this.eventEmitterService.
    invokeOdswiezUseraPoDelete.subscribe( (name: string) => {
         this.getUsers();
      });
    }


  }

  // async getUsers() {
  //   this.rowTblUsers = await  this._derogationservice.getTblUsers().toPromise();
  // }


 async getUsers() {
    this._derogationservice.getTblUsers().subscribe(res => {
      this.rowTblUsers = res;
    });
  }

  onNoClick() {
  this.dialogRef.close();
}

onaddNewClick() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = "1150px";
    dialogConfig.height = "680px";
    dialogConfig.autoFocus = true;
    // dane transportowane do formularza
    dialogConfig.data = this.data;

    const dialogReflo = this.dialog.open(UseraddnewComponent, dialogConfig);
    dialogReflo.afterClosed().subscribe(res => {
      this.getUsers();
    });
}


refresh() {
  this.getUsers();
}
}
