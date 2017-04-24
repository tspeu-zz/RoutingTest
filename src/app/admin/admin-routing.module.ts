import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from "app/admin/admin.component";
import { UsersComponent } from "app/admin/users/users.component";
import { EmailComponent } from "app/admin/email/email.component";

const routes: Routes = [
  {path: 'admin', component: AdminComponent,
    children:[
      {path:'', component: UsersComponent},
      {path:'email',component: EmailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
