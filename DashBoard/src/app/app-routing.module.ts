import { DerogationheaderComponent } from './derogation/derogationheader/derogationheader.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionSalesComponent } from './sections/section-sales/section-sales.component';
import { SectionOrdersComponent } from './sections/section-orders/section-orders.component';
import { SectionHealthComponent } from './sections/section-health/section-health.component';
import { AuthGuardService } from '../app/services/auth-guard.service';


const routes: Routes = [
  { path: 'sales', component: SectionSalesComponent },
  { path: 'orders', component: SectionOrdersComponent ,  canActivate: [AuthGuardService] },
  { path: 'health', component: SectionHealthComponent },
  { path: 'derogationHeader', component: DerogationheaderComponent},

  { path: '', redirectTo: '/sales', pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
