import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';

const jwtHelper = new JwtHelperService()

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor( private router: Router ,private toastr: ToastrService) { }

  canActivate() {
    var token = localStorage.getItem("jwt");


    if (token && !jwtHelper.isTokenExpired(token)){
      return true;
    }
    this.router.navigate(["sales"]);
    this.toastr.error("Only for loging users    ");
    return false;
  }
}
