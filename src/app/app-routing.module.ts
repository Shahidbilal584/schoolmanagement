import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { EmployComponent } from './employ/employ.component';
import { LoginComponent } from './login/login.component'; 
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
  {
    path: 'userlist',
    component:ListUserComponent
  },
  {
    path: 'employ',
    component:EmployComponent
  },
  {
    path: '',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
