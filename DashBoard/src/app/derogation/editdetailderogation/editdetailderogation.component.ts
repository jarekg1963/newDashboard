import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from "@angular/material";
import { DerogationServicesService } from "src/app/services/derogation-services.service";
import {
  FormBuilder,
  FormGroup,
  Validators,
  NgForm,
  FormControl
} from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { DerogationItem } from "src/app/shared/DerogationItem";
import { HttpErrorResponse } from "@angular/common/http";
import { ConfirmationdialogComponent } from 'src/app/tools/confirmationdialog/confirmationdialog.component';

@Component({
  selector: "app-editdetailderogation",
  templateUrl: "./editdetailderogation.component.html",
  styleUrls: ["./editdetailderogation.component.css"]
})
export class EditdetailderogationComponent implements OnInit {
  edForm: FormGroup;
  eData: any;
  submitted = false;
  resource: DerogationItem;
  idItemu: number;

  constructor(
    public dialogRef: MatDialogRef<EditdetailderogationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private _derogationheaders: DerogationServicesService,
    private toastr: ToastrService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.edForm = new FormGroup({
      action: new FormControl("", Validators.required),
      partNo: new FormControl("", Validators.required),
      reason: new FormControl("", Validators.required),
      apartNo: new FormControl(""),
      apartNoDesc: new FormControl(""),
      aquantity: new FormControl("", Validators.required),
      modelName: new FormControl("", Validators.required),
      partNoDesc: new FormControl("", Validators.required),
      productCode: new FormControl("", Validators.required),
      quantity: new FormControl("", Validators.required),
      supplier: new FormControl(""),
      workOrder: new FormControl("", Validators.required),
      id: new FormControl(""),
      DerogationID: new FormControl("")
    });

    this._derogationheaders.getDerogationItemId(this.data).subscribe(res => {
      this.eData = res;
      //     console.log(this.eData);
      this.idItemu = res[0].id;
      this.edForm.patchValue({
        action: res[0].action.replace(/\s/g, ""),
        partNo: res[0].partNo,
        reason: res[0].reason,

        apartNo: res[0].apartNo,
        apartNoDesc: res[0].apartNoDesc,
        aquantity: res[0].aquantity,
        modelName: res[0].modelName,
        partNoDesc: res[0].partNoDesc,
        productCode: res[0].productCode,
        quantity: res[0].quantity,
        supplier: res[0].supplier,
        workOrder: res[0].workOrder,
        id: res[0].id,
        DerogationID: res[0].DerogationID
      });
    });
  }

  get action() {
    return this.edForm.get("action");
  }

  get partNo() {
    return this.edForm.get("partNo");
  }

  get apartNoDesc() {
    return this.edForm.get("apartNoDesc");
  }

  get apartNo() {
    return this.edForm.get("apartNo");
  }

  get aquantity() {
    return this.edForm.get("aquantity");
  }

  get modelName() {
    return this.edForm.get("modelName");
  }

  get partNoDesc() {
    return this.edForm.get("partNoDesc");
  }

  get productCode() {
    return this.edForm.get("productCode");
  }

  get quantity() {
    return this.edForm.get("quantity");
  }
  get supplier() {
    return this.edForm.get("supplier");
  }
  get workOrder() {
    return this.edForm.get("workOrder");
  }

  get id() {
    return this.edForm.get("id");
  }

  get DerogationID() {
    return this.edForm.get("DerogationID");
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onFormSubmit = edFormValue => {

    const dialogRef = this.dialog.open(ConfirmationdialogComponent, {
            width: "350px",
            data: "Do you want update data?"
          });

    dialogRef.afterClosed().subscribe(result => {
            if (result) {

 this.kasuj();

 }

});
  }

  pokaz() {
    this.submitted = true;
    this.dialogRef.close();
  }

  getErrorMessageAction() {
    return this.action.hasError("required") ? "You must enter a value" : "";
  }


  kasuj() {

    this._derogationheaders
      .updateDerogationItem(this.idItemu, this.edForm.value)
      .subscribe(
        data => {
          // console.log("OK");
          this.toastr.success("OK", "Opdated");
        },
        err => {
          console.log(err);
        }
      );
    this.submitted = true;
    this.dialogRef.close();
  }


}
