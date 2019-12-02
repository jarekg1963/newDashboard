import { Component, OnInit, LOCALE_ID, Inject } from "@angular/core";
import { AllCommunityModules } from "@ag-grid-community/all-modules";
import { DerogationServicesService } from "src/app/services/derogation-services.service";
import { formatDate } from "@angular/common";
import { CellCustomComponent } from "../cell-custom/cell-custom.component";
import { FormControl } from "@angular/forms";

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
// fromDate = new Date(this.toDate.getTime() - 7 * 86400000);
fromDate = new Date(this.toDate.getTime() - 70 * 86400000);

urlDaty = 'http://localhost:5000/api/DerogationHeader/GetByDate/?dateOd=';


  modules = AllCommunityModules;

  constructor(
    private _derogationheaders: DerogationServicesService
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


  showDerogations() {

    this.getDerogationHeadersDaty();

    console.log( ' from ' + this.zamienDate(this.fromDate));
    console.log( ' to ' + this.zamienDate(this.toDate));


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
}
