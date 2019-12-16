import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngForm: FormGroup;
  invalidLogin: any;
  hide = true;

  constructor( private http: HttpClient, private dialogRef: MatDialogRef<LoginComponent>, private toastr: ToastrService) { }

  ngOnInit() {
    this.ngForm = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });

    this.ngForm.patchValue({
      username: "",
      password: ""
    });
  }

  get username() {
    return this.ngForm.get("username");
  }

  get password() {
    return this.ngForm.get("password");
  }


  onNoClick(): void {
    this.dialogRef.close();
  }


  getErrorMessagePassword() {
    return this.password.hasError("required") ? "You must enter a value" : "";
  }


  onLoginClick() {
   let credentials = JSON.stringify(this.ngForm.value);

   this.http.post('http://localhost:5000/api/auth/login', credentials, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      let token = (<any>response).token;
      console.log(token);
      localStorage.setItem("jwt", token);
      this.invalidLogin = false;
      {this.toastr.success("Zalogowano pomyślnie "); }
    }, err => {
      this.invalidLogin = true;
      {this.toastr.error("Wrong pass or username   "); }
      localStorage.removeItem("jwt");

    });

    this.dialogRef.close();
  }




}
