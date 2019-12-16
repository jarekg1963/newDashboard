import { Component, OnInit } from "@angular/core";
import { LoginComponent } from "../login/login.component";
import { MatDialog } from "@angular/material";
import { Router } from '@angular/router';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(public dialog: MatDialog, private router: Router) {}

  ngOnInit() {}

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
    this.router.navigate(["sales"]);

  }

}
