import { async } from '@angular/core/testing';
import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ConfirmationdialogComponent } from 'src/app/tools/confirmationdialog/confirmationdialog.component';
import { DerogationServicesService } from 'src/app/services/derogation-services.service';
import { ToastrService } from 'ngx-toastr';
import { UsereditComponent } from '../useredit/useredit.component';
import { CommonfuncionsService } from 'src/app/services/commonfuncions.service';


@Component({
  selector: 'app-usercellbutton',
  templateUrl: './usercellbutton.component.html',
  styleUrls: ['./usercellbutton.component.css']
})
export class UsercellbuttonComponent implements OnInit {


  data: number;
  params: any;

  agInit(params) {
    this.params = params;
  }
  constructor(    public dialog: MatDialog,
                  private _derogationService: DerogationServicesService,
                  private toastr: ToastrService,
                  private eventEmitterService: CommonfuncionsService
                  ) { }


  ngOnInit() {
  }



  editDetailRow() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.width = "1100px";
    dialogConfig.height = "680px";
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.params.node.data.userId;

    const dialogEdit = this.dialog.open(UsereditComponent, dialogConfig);
    dialogEdit.afterClosed().subscribe(async res => {
      await this.eventEmitterService.odswierzGridaUsers();
    });

  }


async openDialogDelete($event) {
    // const params = {
    //   event: $event
    // };
    const dialogRefDialog = this.dialog.open(ConfirmationdialogComponent, {
      width: "350px",
      data: "Do you confirm the deletion of this data?"
    });

    dialogRefDialog.afterClosed().subscribe(async result => {
      if (result) {
        await this.deleteUserItem(this.params.node.data.userId);  // Otwiera okno dialogowe do kasowania
        this.eventEmitterService.odswierzGridaUsers();            // Uruchamia funkcje w komponencie userlist do odswierzenia
      } else {
      }
    });


  }

  async deleteUserItem(id: number) {
    return this._derogationService.deleteUser(id).toPromise();

    /*
    .subscribe(data => {
     this.toastr.success("Deleted ", "OK"),
     err => this.toastr.error("No record found ");
  });
  */
  }

}
