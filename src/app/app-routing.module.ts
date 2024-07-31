import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { LoginComponent } from './login/login.component'; 
import { SignupComponent } from './signup/signup.component';
import { ListFeeComponent } from './list-fee/list-fee.component';
import { ListClassComponent } from './list-class/list-class.component';
import { SectionComponent } from './section/section.component';
const routes: Routes = [
  {
    path: 'userlist',
    component:ListUserComponent
  },
  {
    path: 'classlist',
    component:ListClassComponent
  },
  {
    path: 'feelist',
    component:ListFeeComponent
  },
  {
    path: 'section',
    component:SectionComponent
  },
  {
    path: 'ff',
    component:LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
