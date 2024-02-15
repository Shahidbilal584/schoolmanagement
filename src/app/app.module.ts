import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { ListUserComponent } from './list-user/list-user.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
////////////////////////////////////////////////////////////////////////////////
// angular material add
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { AddUserComponent } from './add-user/add-user.component';
import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { EmployComponent } from './employ/employ.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
///////////////////////////////////////////////////////////////////////////////
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListUserComponent,
    SidebarComponent,
    AddUserComponent,
    EmployComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatExpansionModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSnackBarModule,
    NgIf,
    ReactiveFormsModule,
    MatButtonModule,
    FormsModule
 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
