import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { SectionSalesComponent } from "./sections/section-sales/section-sales.component";
import { SectionOrdersComponent } from "./sections/section-orders/section-orders.component";
import { SectionHealthComponent } from "./sections/section-health/section-health.component";
import { BarChartComponent } from "./charts/bar-chart/bar-chart.component";
import { LineChartComponent } from "./charts/line-chart/line-chart.component";
import { PieChartComponent } from "./charts/pie-chart/pie-chart.component";
import { ChartsModule } from "ng2-charts";
import { ServerComponent } from "./server/server.component";
import { PaginationComponent } from "./pagination/pagination.component";
import { SalesDataService } from "./services/sales-data.service";
import { HttpClientModule } from "@angular/common/http";
import { DerogationheaderComponent } from "./derogation/derogationheader/derogationheader.component";
import { AgGridModule } from "@ag-grid-community/angular";
import { DerogationServicesService } from "./services/derogation-services.service";
import { CellCustomComponent } from "./derogation/cell-custom/cell-custom.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { FormsModule } from "@angular/forms";
import { DerogationDetailsComponent } from "./derogation/derogation-details/derogation-details.component";
import { CellbuttondetailsComponent } from "./derogation/cellbuttondetails/cellbuttondetails.component";
import { EditdetailderogationComponent } from "./derogation/editdetailderogation/editdetailderogation.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ConfirmationdialogComponent } from './tools/confirmationdialog/confirmationdialog.component';
import { ToastrModule } from 'ngx-toastr';
import { NewheaderderogationComponent } from './derogation/newheaderderogation/newheaderderogation.component'
import { DatePipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material';
import { AddnewderogationitemComponent } from './derogation/addnewderogationitem/addnewderogationitem.component';
import { Testservisucom1Component } from './tools/testservisucom1/testservisucom1.component';
import { Testservisucom2Component } from './tools/testservisucom2/testservisucom2.component';
import { LoginComponent } from './login/login.component';
import { JwtModule } from "@auth0/angular-jwt";
import { UserslistComponent } from './users/userslist/userslist.component';
import { UsercellbuttonComponent } from './users/usercellbutton/usercellbutton.component';
import { UsereditComponent } from './users/useredit/useredit.component';
import { UseraddnewComponent } from './users/useraddnew/useraddnew.component';
import { CommonfuncionsService } from './services/commonfuncions.service';
import { ListalinkowComponent } from './linki/listalinkow/listalinkow.component';
import { ExampleIssuesComponent } from './linki/example-issues/example-issues.component';
import { AddComponent } from './linki/exampleIssues/add/add.component';
import { DeleteComponent } from './linki/exampleIssues/delete/delete.component';
import { EditComponent } from './linki/exampleIssues/edit/edit.component';
import { NgxeditorComponent } from './ngxeditor/ngxeditor.component';
import { NgxEditorModule } from 'ngx-editor';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {  NgxDocViewerModule } from 'ngx-doc-viewer';
import { LinkidocumentsComponent } from './linki/linkidocuments/linkidocuments.component';
import { BieganieComponent } from './sport/trening/bieganie/bieganie.component';


export function tokenGetter() {
  return localStorage.getItem("jwt");
}


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionSalesComponent,
    SectionOrdersComponent,
    SectionHealthComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    ServerComponent,
    PaginationComponent,
    DerogationheaderComponent,
    CellCustomComponent,
    DerogationDetailsComponent,
    CellbuttondetailsComponent,
    EditdetailderogationComponent,
    ConfirmationdialogComponent,
    NewheaderderogationComponent,
    AddnewderogationitemComponent,
    Testservisucom1Component,
    Testservisucom2Component,
    LoginComponent,
    UserslistComponent,
    UsercellbuttonComponent,
    UsereditComponent,
    UseraddnewComponent,
    ListalinkowComponent,
    ExampleIssuesComponent,
    AddComponent,
    DeleteComponent,
    EditComponent,
    NgxeditorComponent,
    LinkidocumentsComponent,
    BieganieComponent

  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    MatFormFieldModule,
    NgxEditorModule,
    NgxDocViewerModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:5000"],
        blacklistedRoutes: []
      }
    }),
    AppRoutingModule
  ],
  providers: [SalesDataService, DerogationServicesService, DatePipe, CommonfuncionsService],
  bootstrap: [AppComponent],
  entryComponents: [
    CellCustomComponent,
    DerogationDetailsComponent,
    CellbuttondetailsComponent,
    EditdetailderogationComponent,
    ConfirmationdialogComponent,
    NewheaderderogationComponent,
    AddnewderogationitemComponent,
    LoginComponent,
    UserslistComponent,
    UsercellbuttonComponent,
    UsereditComponent,
    UseraddnewComponent,
    ListalinkowComponent,
    ExampleIssuesComponent,
    AddComponent,
    DeleteComponent,
    EditComponent

  ]
})
export class AppModule {}
