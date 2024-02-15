import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { EmployComponent } from './employ/employ.component';
const routes: Routes = [
  {
    path: 'userlist',
    component:ListUserComponent
  },
  {
    path: 'employ',
    component:EmployComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
