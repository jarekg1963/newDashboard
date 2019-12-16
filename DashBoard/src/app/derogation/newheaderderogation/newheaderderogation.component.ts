import { Component, OnInit, Inject, AbstractType } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from "@angular/material";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { DatePipe } from "@angular/common";
import { DerogationServicesService } from "src/app/services/derogation-services.service";
import { ConfirmationdialogComponent } from "src/app/tools/confirmationdialog/confirmationdialog.component";
import { ToastrService } from "ngx-toastr";

export interface Owners {
  nameValue: string;
  nameViewValue: string;
}

@Component({
  selector: "app-newheaderderogation",
  templateUrl: "./newheaderderogation.component.html",
  styleUrls: ["./newheaderderogation.component.css"]
})
export class NewheaderderogationComponent implements OnInit {
  newHeaderForm: FormGroup;

  myDate = new Date();
  selected = "option2";

  owners: Owners[] = [
    { nameValue: "Jaroslaw.Granat", nameViewValue: "Jaroslaw.Granat" },
    { nameValue: "Ewa.Granat", nameViewValue: "Ewa.Granat" },
    { nameValue: "Zbyszek.Granat", nameViewValue: "Zbyszek.Granat" }
  ];

  sdepartments = [];
  ludzie = [];
  syfy: any;

  // departments: Owners[] = [
  //   { nameValue: "SCM ", nameViewValue: "SCM Supply Chain " },
  //   { nameValue: "IT", nameViewValue: "IT" },
  //   { nameValue: "R&D", nameViewValue: "R&D" }
  // ];

  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<NewheaderderogationComponent>,
    private datePipe: DatePipe,
    private _derogationheaders: DerogationServicesService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    let ddMMyyyy = this.datePipe.transform(new Date(), "yyyy-MM-dd");

    // let currentDate = new Date();

    this.newHeaderForm = new FormGroup({
      createdDate: new FormControl(ddMMyyyy),
      owner: new FormControl("", Validators.required),
      department: new FormControl("", Validators.required),
      ltime: new FormControl(0),
      slt: new FormControl(0),
      dcostP: new FormControl(0),
      dcostF: new FormControl(0),
      cancelled: new FormControl(""),
      approved: new FormControl(""),
      offline: new FormControl(""),
      cancellationReason: new FormControl("")
      //   derogationId: new FormControl("")
    });

    this.newHeaderForm.patchValue({
      createdDate: ddMMyyyy,
      owner: "",
      department: "",
      ltime: 0,
      slt: 0,
      dcostP: 0,
      dcostF: 0,
      cancelled: false,
      approved: false,
      offline: false,
      cancellationReason: ""
      // derogationId: 1700
    });

    this.getSlownikDepartment();
    this.getSlownikLudzie();
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

  get ltime() {
    return this.newHeaderForm.get("ltime");
  }

  get slt() {
    return this.newHeaderForm.get("slt");
  }

  get dcostP() {
    return this.newHeaderForm.get("dcostP");
  }

  get dcostF() {
    return this.newHeaderForm.get("dcostF");
  }

  get cancelled() {
    return this.newHeaderForm.get("cancelled");
  }

  get approved() {
    return this.newHeaderForm.get("approved");
  }

  get offline() {
    return this.newHeaderForm.get("offline");
  }

  get cancellationReason() {
    return this.newHeaderForm.get("cancellationReason");
  }

  // get derogationId() {
  //   return this.newHeaderForm.get("derogationId");
  // }

  onFormSubmit() {}

  addNewHeader() {
    // console.log( this.newHeaderForm.value);
    const dialogRef = this.dialog.open(ConfirmationdialogComponent, {
      width: "350px",
      data: "Do you want add new derogation?"
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // wywołanie na tak
        this.addHeader();
      }
    });
  }

  getErrorMessageOwner() {
    return this.owner.hasError("required") ? "You must enter a value" : "";
  }

  addHeader() {
    this._derogationheaders
      .addDerogationHeader(this.newHeaderForm.value)
      .subscribe(
        data => {
          console.log("zwrot z bacendu" + data);
          this.toastr.success("Zapisano Derogacje numer ", data);
        },
        err => {
          console.log(err);
        }
      );

    this.dialogRef.close();
  }

  getSlownikDepartment() {
    this._derogationheaders.getDepartments().subscribe((res: any[]) => {
      this.sdepartments = res;
      //      console.log(this.sdepartments);
    });
  }

  getSlownikLudzie() {
    this._derogationheaders.getLudzie().subscribe((res: any[]) => {
      this.ludzie = res;
      console.log(this.ludzie);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
