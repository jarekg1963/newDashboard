import { Component, OnInit } from '@angular/core';
import { LinkdataService } from 'src/app/services/linkdata.service';
import { InternetLinks } from 'src/app/shared/InternetLinks';


@Component({
  selector: 'app-listalinkow',
  templateUrl: './listalinkow.component.html',
  styleUrls: ['./listalinkow.component.css']
})
export class ListalinkowComponent implements OnInit {



  constructor(private _linkService: LinkdataService) { }



  ngOnInit() {

  }





}





