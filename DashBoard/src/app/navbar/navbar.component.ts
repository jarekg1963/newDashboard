import { Component, OnInit } from "@angular/core";
import { LoginComponent } from "../login/login.component";
import { MatDialog } from "@angular/material";
import { Router } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(public dialog: MatDialog, private router: Router,
              private auth: AuthGuardService,
              private toastr: ToastrService) {}

sUser: any;

  ngOnInit() {
    this.auth.currentUser.subscribe(msg => this.sUser = msg );
  }

  loggedIn() {
    return this.auth.logedIn();
  }

  OpenLogin() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: "550px",
      height: "450px"
      //        data: this.params.node.data.derogationId
    });
    dialogRef.afterClosed().subscribe(result => {
      //      this.data = result;
    });
  }

  OpenLogout() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user")
    this.auth.currentUser = null;
    this.sUser = '';
    this.router.navigate(["sales"]);
    this.toastr.success("Sucesfully logout ");
  }




}
