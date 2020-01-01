import { Component, OnInit, Inject } from '@angular/core';
import {DataService} from '../../../services/data.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent  {

  constructor(public dialogRef: MatDialogRef<DeleteComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public dataService: DataService) { }

    onNoClick(): void {
      this.dialogRef.close();
    }

    confirmDelete(): void {
      this.dataService.deleteIssue(this.data.id);
    }
}
