import { User } from 'src/app/shared/User';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ConfirmationdialogComponent } from 'src/app/tools/confirmationdialog/confirmationdialog.component';
import { DerogationServicesService } from 'src/app/services/derogation-services.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-useraddnew',
  templateUrl: './useraddnew.component.html',
  styleUrls: ['./useraddnew.component.css']
})
export class UseraddnewComponent implements OnInit {
  edForm: FormGroup;
  submitted = false;



  constructor(public dialog: MatDialog,
              public dialogRef: MatDialogRef<UseraddnewComponent>,
              private _derogationService: DerogationServicesService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.edForm = new FormGroup({
      // userId: new FormControl("", Validators.required),
      FullName: new FormControl("", Validators.required),
      position: new FormControl("User", Validators.required),
      Email: new FormControl("", Validators.required),
      pass1: new FormControl("",Validators.required),
      pass2: new FormControl("",Validators.required),
    });
  }

  get FullName() {
    return this.edForm.get("FullName");
  }

  get position() {
    return this.edForm.get("position");
  }

  get Email() {
    return this.edForm.get("Email");
  }

  get pass1() {
    return this.edForm.get("pass1");
  }

  get pass2() {
    return this.edForm.get("pass2");
  }


  onFormSubmit = edFormValue => {
    const dialogRef = this.dialog.open(ConfirmationdialogComponent, {
      width: "350px",
      data: "Do you want update data?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // wywołanie na tak
        this.addNewUser();
      }
    });
  }

  addNewUser() {

    this._derogationService
      .addNewUser(this.edForm.value, this.edForm.value.pass1)
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


  onNoClick() {
      this.submitted = true;
      this.dialogRef.close();
  }

}
