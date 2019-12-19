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
sPosition: any;

  ngOnInit() {
    this.auth.currentUser.subscribe(msg => this.sUser = msg );
    this.auth.currentPosition.subscribe(msgP => {this.sPosition = msgP;
                                                 console.log('Position' + this.sPosition);
    });
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

  sprawdzStanowisko() {
    if (this.sPosition === 'Manager') {
      return true; } else { return false; }
  }


}
