import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ConfirmationdialogComponent } from 'src/app/tools/confirmationdialog/confirmationdialog.component';
import { DerogationServicesService } from 'src/app/services/derogation-services.service';
import { ToastrService } from 'ngx-toastr';
import { UsereditComponent } from '../useredit/useredit.component';

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
                  private toastr: ToastrService) { }


  ngOnInit() {
  }

  editDetailRow() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.width = "1100px";
    dialogConfig.height = "680px";
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.params.node.data.userId;

    this.dialog.open(UsereditComponent, dialogConfig);
  }


  openDialogDelete($event): void {
    const params = {
      event: $event
    };
    const dialogRef = this.dialog.open(ConfirmationdialogComponent, {
      width: "350px",
      data: "Do you confirm the deletion of this data?"
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteUserItem(this.params.node.data.userId);
      } else {
      }
    });
  }





  deleteUserItem(id) {
    // return this._derogationService.deleteDerodationItem(id).subscribe(data => {
     // this.toastr.success("Deleted ", "OK");
    // });


      this.toastr.success("Deleted ", "OK");
  }

}
