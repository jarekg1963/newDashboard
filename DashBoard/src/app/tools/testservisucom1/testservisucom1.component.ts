import { Component, OnInit } from "@angular/core";
import { GlobalmessangerService } from "src/app/services/globalmessanger.service";

@Component({
  selector: "app-testservisucom1",
  templateUrl: "./testservisucom1.component.html",
  styleUrls: ["./testservisucom1.component.css"]
})
export class Testservisucom1Component implements OnInit {
  title = "SendDataBetweenComponents";
  message: string;
  messagenum: number;

  constructor(private data: GlobalmessangerService) {}

  ngOnInit() {
    this.data.currentMessage.subscribe(msg => (this.message = msg));
    this.data.currentMessage1.subscribe(msg => (this.messagenum = msg));
  }

  sendMessage() {
    this.data.changeMessage("z jedynki");
  }

  sendMessage1() {
    this.data.changenumber(this.messagenum++);
  }
}
