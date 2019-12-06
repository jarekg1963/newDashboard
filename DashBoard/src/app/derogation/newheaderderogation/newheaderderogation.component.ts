import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';



export interface Owners {
  nameValue: string;
  nameViewValue: string;
}


@Component({
  selector: 'app-newheaderderogation',
  templateUrl: './newheaderderogation.component.html',
  styleUrls: ['./newheaderderogation.component.css']
})


export class NewheaderderogationComponent implements OnInit {
  newHeaderForm: FormGroup;
  myDate = new Date();
  selected = 'option2';

  owners: Owners[] = [
    {nameValue: 'Jaroslaw.Granat', nameViewValue: 'Jaroslaw.Granat'},
    {nameValue: 'Ewa.Granat', nameViewValue: 'Ewa.Granat'},
    {nameValue: 'Zbyszek.Granat', nameViewValue: 'Zbyszek.Granat'},

  ];


  constructor( private dialog: MatDialog, private formBuilder: FormBuilder,
               private dialogRef: MatDialogRef<NewheaderderogationComponent>,
               private datePipe: DatePipe
    ) {

     }

  ngOnInit() {


    this.newHeaderForm = new FormGroup({
      createdDate: new FormControl("",),
      owner: new FormControl("",),
      department: new FormControl("",)



    });

    this.newHeaderForm.patchValue({
    createdDate: this.datePipe.transform(new Date(),"dd-MM-yyyy"),
    owner: "",
    department:""
    });
  }

  get createdDate() {
    return this.newHeaderForm.get("createdDate");
  }

  get owner() {
    return this.newHeaderForm.get("owner");
  }

  get department() {
    return this.newHeaderForm.get("department");
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  onFormSubmit(newHeaderForm) {

  }

}
