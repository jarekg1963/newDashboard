import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../shared/User';

const jwtHelper = new JwtHelperService()

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
public zalogowany: boolean;


private currentUserSubject: BehaviorSubject<String>;
public currentUser: Observable<String>;




  constructor( private router: Router , private toastr: ToastrService, private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<string>('');
    this.currentUser = this.currentUserSubject.asObservable();
  }

  canActivate(): boolean {
    var token = localStorage.getItem("jwt");

    if (token && !jwtHelper.isTokenExpired(token)) {
      return true;
    }



    this.router.navigate(["sales"]);
    this.toastr.error("Only for login    ");
    return false;
  }

  logedIn() {
    const token = localStorage.getItem('jwt');
    return !jwtHelper.isTokenExpired(token);
  }

displayUser() {
  const u = localStorage.getItem('user');
  console.log('u' + u);
  return u;
}

  loginService(user: User) {
    return this.http.post<any>('http://localhost:5000/api/auth/login', user.FullName )
        .pipe(map(res => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            let token = res.token;
            localStorage.setItem('currentUser', JSON.stringify(user.FullName));
            localStorage.setItem("jwt", token);
            this.currentUserSubject.next(user.FullName);
            return user;
        }));
}

loginekService(user: User, password: string) {


  console.log('from serwisu ' + user.FullName);
  return this.http.post<any>('http://localhost:5000/api/auth/loginek?password=test', user )
      .pipe(map(res => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          let token = res.token;
          localStorage.setItem('currentUser', JSON.stringify(user.FullName));
          localStorage.setItem("jwt", token);
          this.currentUserSubject.next(user.FullName);
          return user;
      }));
}

}
