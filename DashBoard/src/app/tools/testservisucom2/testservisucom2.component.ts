import { Component, OnInit } from '@angular/core';
import { GlobalmessangerService } from 'src/app/services/globalmessanger.service';

@Component({
  selector: 'app-testservisucom2',
  templateUrl: './testservisucom2.component.html',
  styleUrls: ['./testservisucom2.component.css']
})
export class Testservisucom2Component implements OnInit {

  message: string;
  messagenum: number;

  wysylkazc2 = "sysylka z 2";



  constructor(private data: GlobalmessangerService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(msg => this.message = msg);
    this.data.currentMessage1.subscribe(msg => (this.messagenum = msg));
  }

  sendMessage() {
    this.data.changeMessage(this.wysylkazc2);
  }
  sendMessage1() {
    this.data.changenumber(this.messagenum++);
  }

}
