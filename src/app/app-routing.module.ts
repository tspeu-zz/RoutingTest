import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';


export const routes: Routes = [
  {path:'',pathMatch:'full',  redirectTo:'dashboard' },
  {path:'dashboard', component:DashboardComponent },
  {path:'customer', component: CustomerComponent }
];
//pathMatch: 'full',
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }