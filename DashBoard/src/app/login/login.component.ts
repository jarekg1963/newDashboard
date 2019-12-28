import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";
import { AuthGuardService } from "../services/auth-guard.service";
import { Router } from "@angular/router";
import { map } from 'rxjs/operators';
import { User } from '../shared/User';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  ngForm: FormGroup;
  invalidLogin: any;
  hide = true;
  zbiorProbny: any;

  constructor(
    private http: HttpClient,
    private dialogRef: MatDialogRef<LoginComponent>,
    private toastr: ToastrService,
    private auth: AuthGuardService,
    private router: Router
  ) {}

  ngOnInit() {
    this.ngForm = new FormGroup({
      FullName: new FormControl("", Validators.required),
      Password: new FormControl("", Validators.required)
    });

    this.ngForm.patchValue({
      FullName: "Jarek",
      Password: "password"
    });
  }

  get FullName() {
    return this.ngForm.get("FullName");
  }

  get Password() {
    return this.ngForm.get("Password");
  }

  get f() {
    return this.ngForm.controls;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getErrorMessagePassword() {
    return this.Password.hasError("required") ? "You must enter a value" : "";
  }


  sLoginClick() {



    this.auth.loginService(this.ngForm.value).subscribe(
      next => {
        this.toastr.success("Zalogowano pomyślnie użytkownika : " + next.FullName);
      },
      error => {
        this.toastr.error("Wrong pass or username   ");
      }
    );

    this.dialogRef.close();
  }
}
