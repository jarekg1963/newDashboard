import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DerogationServicesService } from "src/app/services/derogation-services.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-addnewderogationitem",
  templateUrl: "./addnewderogationitem.component.html",
  styleUrls: ["./addnewderogationitem.component.css"]
})
export class AddnewderogationitemComponent implements OnInit {
  adForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddnewderogationitemComponent>,
    @Inject(MAT_DIALOG_DATA) public derogId: number,
    private _derogationService: DerogationServicesService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    console.log("Id derogacji " + this.derogId);

    this.adForm = new FormGroup({
      action: new FormControl("", Validators.required),
      partNo: new FormControl("", Validators.required),
      reason: new FormControl("", Validators.required),
      apartNo: new FormControl(""),
      apartNoDesc: new FormControl(""),
      aquantity: new FormControl(0, Validators.required),
      modelName: new FormControl("", Validators.required),
      partNoDesc: new FormControl("", Validators.required),
      productCode: new FormControl("", Validators.required),
      quantity: new FormControl(0, Validators.required),
      supplier: new FormControl(""),
      workOrder: new FormControl("", Validators.required),

      DerogationID: new FormControl("")
    });

    this.adForm.patchValue({
      action: "",
      partNo: "",
      reason: "",
      apartNo: "",
      apartNoDesc: "",
      aquantity: 0,
      modelName: "",
      partNoDesc: "",
      productCode: "",
      quantity: 0,
      supplier: "",
      workOrder: "",
      // id: res[0].id,
      DerogationID: this.derogId
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // onFormSubmit(adForm.value) {

  // }

  getErrorMessageAction() {
    return this.action.hasError("required") ? "You must enter a value" : "";
  }

  // gety sety

  get action() {
    return this.adForm.get("action");
  }

  get partNo() {
    return this.adForm.get("partNo");
  }

  get apartNoDesc() {
    return this.adForm.get("apartNoDesc");
  }

  get apartNo() {
    return this.adForm.get("apartNo");
  }

  get aquantity() {
    return this.adForm.get("aquantity");
  }

  get modelName() {
    return this.adForm.get("modelName");
  }

  get partNoDesc() {
    return this.adForm.get("partNoDesc");
  }

  get productCode() {
    return this.adForm.get("productCode");
  }

  get quantity() {
    return this.adForm.get("quantity");
  }
  get supplier() {
    return this.adForm.get("supplier");
  }
  get workOrder() {
    return this.adForm.get("workOrder");
  }



  get DerogationID() {
    return this.adForm.get("DerogationID");
  }

  // koniec gety sety

  // On form submit

  onFormSubmit() {
    this.addItem();
  }

  addItem() {
    this._derogationService.addDerogationItem(this.adForm.value).subscribe(
      data => {
        console.log("zwrot z bacendu" + data);
        this.toastr.success("Zapisano item numer ", data);
      },
      err => {
        console.log(err);
      }
    );

    this.dialogRef.close();
  }
}
