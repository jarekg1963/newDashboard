import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { EditdetailderogationComponent } from "../editdetailderogation/editdetailderogation.component";
import { ConfirmationdialogComponent } from "src/app/tools/confirmationdialog/confirmationdialog.component";
import { DerogationServicesService } from 'src/app/services/derogation-services.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: "app-cellbuttondetails",
  templateUrl: "./cellbuttondetails.component.html",
  styleUrls: ["./cellbuttondetails.component.css"]
})
export class CellbuttondetailsComponent implements OnInit {
  params: any;

  agInit(params) {
    this.params = params;
  }
  constructor(public dialog: MatDialog, private _derogationService: DerogationServicesService,
              private toastr: ToastrService) {}

  ngOnInit() {}

  openDialogEditDetails(): void {
    const dialogRef = this.dialog.open(EditdetailderogationComponent, {
      width: "1100px",
      height: "680px",
      data: this.params.node.data.derogationId
    });
  }

  editDetailRow($event) {
    const params = {
      event: $event
    };
    this.openDialog2();
  }

  openDialog2() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.width = "1100px";
    dialogConfig.height = "680px";
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.params.node.data.id;

    this.dialog.open(EditdetailderogationComponent, dialogConfig);
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
        console.log("Yes clicked" + this.params.node.data.id);
        this.deleteDerogationItem(this.params.node.data.id);

      }
    });
  }

  deleteDerogationItem (id ) {
    return this._derogationService.deleteDerodationItem(id).subscribe(data => {
      this.toastr.success('Deleted ', 'OK')
    });
  }

}

