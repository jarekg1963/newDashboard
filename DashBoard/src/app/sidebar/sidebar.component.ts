import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  links =  [
    {"Name": "aaaaaaa",
    "routeValue": "bbbb"},
    {"Name": "cccccc",
    "routeValue": 'ddddddd'},
    {"Name": "eeeeeee",
    "routeValue": "fffffff"}
  ];

  constructor() { }

  ngOnInit() {


  }

}
