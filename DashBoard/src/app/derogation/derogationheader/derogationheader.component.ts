import { Component, OnInit, LOCALE_ID, Inject } from "@angular/core";
import { AllCommunityModules } from "@ag-grid-community/all-modules";
import { DerogationServicesService } from "src/app/services/derogation-services.service";
import { CellCustomComponent } from "../cell-custom/cell-custom.component";
import { MatDialogConfig, MatDialog } from '@angular/material';
import { NewheaderderogationComponent } from '../newheaderderogation/newheaderderogation.component';

@Component({
  selector: "app-derogationheader",
  templateUrl: "./derogationheader.component.html",
  styleUrls: ["./derogationheader.component.css"]
})
export class DerogationheaderComponent implements OnInit {
  columnDefs = [
    {
      headerName: "Actions",
      field: "action",
      cellRendererFramework: CellCustomComponent,
      width: 130
    },
    {
      headerName: "derogationId",
      field: "derogationId",
      sortable: true,
      filter: true,
      width: 100
    },
    {
      headerName: "Submitted Date",
      field: "createdDate",
      width: 100,
      sortable: true,
    },
    {
      headerName: "owner",
      field: "owner",
      sortable: true,
      filter: true,
      width: 200
    },
    {
      headerName: "department",
      field: "department",
      sortable: true,
      filter: true,
      width: 150
    },
    { headerName: "cancelled", field: "cancelled", sortable: true, width: 50 },
    { headerName: "approved", field: "approved", sortable: true, width: 50 },
    { headerName: "offline", field: "offline", sortable: true, width: 50 },
    {
      headerName: "cancellationReason",
      field: "cancellationReason",
      sortable: true,
      filter: true,
      width: 200
    }
  ];

  dataDerogationHeaders: any;
  rowData: any;


  dzis = new Date();

toDate = new Date();
fromDate = new Date(this.toDate.getTime() - 70 * 86400000);

urlDaty = 'http://localhost:5000/api/DerogationHeader/GetByDate/?dateOd=';


  modules = AllCommunityModules;

  constructor(
    private _derogationheaders: DerogationServicesService,  public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getDerogationHeadersDaty();
  }


  getDerogationHeadersDaty(): void {
    let iurlDaty = this.urlDaty + this.zamienDate(this.fromDate) + '&&dateDo=' + this.zamienDate(this.toDate);
    this._derogationheaders.getDerogationHeadersDaty(iurlDaty).subscribe(res => {
      this.rowData = res;
    });
  }

  private dateToString(date: Date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();

    let dateString = `${month}/${day}/${year}`;
    return dateString;
  }

  zamienDate(date: Date) {
    let day = date.getDate();
    let strDay: string;
    let strMonth: string;
    if (day < 10)
     { strDay = '0' + day.toString(); } else { strDay = day.toString(); }
    let monthIndex = date.getMonth() + 1;
    if ( monthIndex < 10)
    { strMonth = '0' + monthIndex.toString(); } else { strMonth = monthIndex.toString(); }
    const year = date.getFullYear();
    const myFormattedDate =
      year +
      "-" +
      strMonth +
      "-" +
      strDay
    return myFormattedDate;
  }

  newDerogations() {


      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.width = "1100px";
      dialogConfig.height = "680px";
      dialogConfig.autoFocus = true;
      // dane transportowane do formularza
      dialogConfig.data = "";

      this.dialog.open(NewheaderderogationComponent, dialogConfig);
    }



}
