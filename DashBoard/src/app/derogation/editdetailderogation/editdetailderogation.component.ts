import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { DerogationServicesService } from "src/app/services/derogation-services.service";
import { FormBuilder, FormGroup, Validators, NgForm } from "@angular/forms";

@Component({
  selector: "app-editdetailderogation",
  templateUrl: "./editdetailderogation.component.html",
  styleUrls: ["./editdetailderogation.component.css"]
})
export class EditdetailderogationComponent implements OnInit {
  edForm: FormGroup;
  eData: any;
  submitted = false;

  constructor(
    public dialogRef: MatDialogRef<EditdetailderogationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private _derogationheaders: DerogationServicesService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.edForm = this.fb.group({
      action: ['' ],
        partNo: [''],
        reason: [''],
        apartNo: [''],
        apartNoDesc: [''],
        aquantity: [''],
        modelName: [''],
        partNoDesc: [''],
        productCode:[''],
        quantity: [''],
        supplier:[''],
        workOrder:['']
    });

    this._derogationheaders.getDerogationItemId(this.data).subscribe(res => {
      this.eData = res;
     console.log(this.eData);

      this.edForm.patchValue({
        action: res[0].action,
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
        workOrder: res[0].workOrder
    });
});
}




  get action() {
    return this.edForm.get('action');
  }

  get partNo() {
    return this.edForm.get('partNo');
  }

  get apartNoDesc() {
    return this.edForm.get('apartNoDesc');
  }


  get apartNo() {
    return this.edForm.get('apartNo');
  }

  get aquantity() {
    return this.edForm.get('aquantity');
  }

  get modelName() {
    return this.edForm.get('modelName');
  }

  get partNoDesc() {
    return this.edForm.get('partNoDesc');
  }

  get productCode() {
    return this.edForm.get('productCode');
  }

  get quantity() {
    return this.edForm.get('quantity');
  }
  get supplier() {
    return this.edForm.get('supplier');
  }
  get workOrder() {
    return this.edForm.get('workOrder');
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  onFormSubmit(formik: NgForm) {

    console.log('form value ' + formik);
    console.log('work order ' + this.workOrder.value);
    this.submitted = true;
    this.dialogRef.close();
  }

  pokaz() {
    console.log('zmienna action ' + this.workOrder.value );
  }
}




// derogationId: 16972
// id: 3552



