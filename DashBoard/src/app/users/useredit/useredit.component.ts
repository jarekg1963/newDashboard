import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DerogationServicesService } from 'src/app/services/derogation-services.service';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UsereditComponent>, @Inject(MAT_DIALOG_DATA) public idUsera: number,
              private _derogationservice: DerogationServicesService) { }

  ngOnInit() {
    console.log("data " + this.idUsera);
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
