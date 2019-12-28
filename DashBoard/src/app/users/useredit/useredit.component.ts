import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogConfig } from "@angular/material";
import { DerogationServicesService } from "src/app/services/derogation-services.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { User } from "src/app/shared/User";
import { ConfirmationdialogComponent } from 'src/app/tools/confirmationdialog/confirmationdialog.component';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: "app-useredit",
  templateUrl: "./useredit.component.html",
  styleUrls: ["./useredit.component.css"]
})
export class UsereditComponent implements OnInit {
  recordUser: any;
  edForm: FormGroup;
  submitted = false;
  StaleIdUsera: number;


  constructor(
    public dialogRef: MatDialogRef<UsereditComponent>,
    @Inject(MAT_DIALOG_DATA) public idUsera: number,
    private _derogationservice: DerogationServicesService,
    public dialog: MatDialog,
    private toastr: ToastrService,
  ) {}

  ngOnInit() {

    this.edForm = new FormGroup({
      userId: new FormControl("", Validators.required),
      fullName: new FormControl("", Validators.required),
      position: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      pass1: new FormControl("", Validators.required),
      pass2: new FormControl("", Validators.required)
    });

    this.loadDataUsers();
  }

  loadDataUsers() {
    this._derogationservice.getTblUsersById(this.idUsera).subscribe(res => {
      this.recordUser = res;
      this.StaleIdUsera = this.recordUser[0].userId;
      this.edForm.patchValue({
        userId: this.recordUser[0].userId,
        fullName: this.recordUser[0].fullName,
        position: this.recordUser[0].position,
        email: this.recordUser[0].email,
        pass1: "",
        pass2: ""
      });
    });
  }

  get userId() {
    return this.edForm.get("userId");
  }

  get fullName() {
    return this.edForm.get("fullName");
  }

  get position() {
    return this.edForm.get("position");
  }


  get email() {
    return this.edForm.get("email");
  }

  get pass1() {
    return this.edForm.get("pass1");
  }

  get pass2() {
    return this.edForm.get("pass2");
  }


  onNoClick() {
    this.submitted = true;
    this.dialogRef.close();
  }

  onFormSubmit = edFormValue => {
    const dialogRef = this.dialog.open(ConfirmationdialogComponent, {
      width: "350px",
      data: "Do you want update data?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // wywołanie na tak
        this.updateItem();
      }
    });
  }

  updateItem() {
    this._derogationservice
      .updateTblUser(this.StaleIdUsera, this.edForm.value)
      .subscribe(
        data => {
          // console.log("OK");
          this.toastr.success("OK", "Updated");
        },
        err => {
          console.log(err);
        }
      );
    this.submitted = true;
    this.dialogRef.close();
  }




}
