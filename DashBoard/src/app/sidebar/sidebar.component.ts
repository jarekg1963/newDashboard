import { AuthGuardService } from './../services/auth-guard.service';
import { MyTestserviceService } from './../tools/my-testservice.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  todaydate: any;
  duserName: any;

  links =  [
    {"Name": "aaaaaaa",
    "routeValue": "bbbb"},
    {"Name": "cccccc",
    "routeValue": 'ddddddd'},
    {"Name": "eeeeeee",
    "routeValue": "fffffff"}
  ];

  constructor(private _testService:  MyTestserviceService, private auth: AuthGuardService ) { }

  ngOnInit() {
    this.todaydate = this._testService.todayDate();
    this.auth.currentUser.subscribe(msg => this.duserName = msg );
  }


}
