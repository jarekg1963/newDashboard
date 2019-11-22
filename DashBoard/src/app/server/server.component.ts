import { LINE_CHART_COLORS } from './../shared/chart.colors';
import { Component, OnInit, Input } from "@angular/core";
import { Server } from "../shared/server";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"]
})
export class ServerComponent implements OnInit {

  constructor() {}

  color: string;
  buttonText: string;

  @Input() serverInput: Server;

  ngOnInit() {
    this.setServerStatus(this.serverInput.isOnline);
  }

  toggleStatus(onlineStatus: boolean) {
    console.log('clicked');
    this.setServerStatus(!onlineStatus);

  }

  setServerStatus (isOnline: boolean) {
    if ( isOnline) {
      this.serverInput.isOnline = true;
      this.color = '#66BB86A';
      this.buttonText = 'Shut Down';
    } else {
      this.serverInput.isOnline = false;
      this.color = '#FF6B66B';
      this.buttonText = 'Shut Down';
    }
    }

  }


