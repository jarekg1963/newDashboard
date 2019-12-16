import { Component, OnInit } from '@angular/core';
import { Server } from 'src/app/shared/server';
import { SalesDataService } from 'src/app/services/sales-data.service';
import { ToastrService } from 'ngx-toastr';

// const SAMPLE_SERVERS = [
//   { id: 1, name: 'dev-web', isOnline: true },
//   { id: 2, name: 'dev-mail', isOnline: false },
//   { id: 3, name: 'prod-web', isOnline: true },
//   { id: 4, name: 'prod-mail', isOnline: true }
// ];

@Component({
  selector: 'app-section-health',
  templateUrl: './section-health.component.html',
  styleUrls: ['./section-health.component.css']
})
export class SectionHealthComponent implements OnInit {

  servers: any;

  // servers: Server[] = SAMPLE_SERVERS;
  constructor(private sData: SalesDataService, private toastr: ToastrService) {

   }

  ngOnInit() {
  this.WczytajServers();
  }

  WczytajServers() {
    this.sData.getServers()
    .subscribe(res => {
      this.servers = res;
    }, err =>  {this.toastr.error(err , "Tylko dla zalogowanych  ");}
    );

  }

}
