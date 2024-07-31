import { Component, Inject, Optional } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ProjectApiService } from '../project-api.service';
import { catchError, throwError } from 'rxjs';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  user: any = {};
  users: any = [];

  constructor(private dialogRef: MatDialogRef<AddUserComponent>, private userApi: ProjectApiService
    , @Inject(MAT_DIALOG_DATA) public data: any, private snackBar: MatSnackBar) {
    console.log(this.user)
  }

  ngOnInit() {
    if (this.data) {
      this.user = this.data;
      console.log(this.user);
    }

  }

  openSnackBar(message: string, isSuccess: boolean) {
    const panelClass = isSuccess ? ['success-snackbar'] : ['error-snackbar'];
    this.snackBar.open(message, '', {
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      panelClass: panelClass

    });
  }

  UpdateUser() {
    this.userApi.updateUsers(this.data.id, this.user).subscribe((res) => {
      console.log(res)
      this.dialogRef.close(res);
      
      this.openSnackBar('updatedSuccessfuly', true);
    })
  }

  usersAdd() {
    this.userApi.addUser(this.user).pipe(
      catchError(error => {
        if (error.status >= 400 && error.status < 500) {
          this.openSnackBar('Client error occurred:  ', false);
          // this.loading=false;
        } else if (error.status >= 500) {
          this.openSnackBar('Server error occurred: ', false);
          // this.loading=false;
        } else {
          this.openSnackBar('An error occurred: ', false);
          //this.loading=false;

        }
        return throwError(error);
      })
    )
      .subscribe((res: any) => {
        console.log(res);
        this.dialogRef.close(true);
        this.openSnackBar('addedSuccessfuly', true);
      })
  }

  cancelDialog() {
    this.user = {};
    this.dialogRef.close();

  }

}
