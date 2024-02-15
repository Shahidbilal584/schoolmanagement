import { Component, Inject, Optional } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ProjectApiService } from '../project-api.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  application: any = {};
  applications: any = [];
  
  empForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddUserComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any[],private _snackBar: MatSnackBar, private users: ProjectApiService) {
  }

  // constructor(private _fb:FormBuilder,
  //   private _empService:EmployeeService,
  //   private _dialogRef:MatDialogRef<EmpAddEditComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data:any
  //   ){

  // this.empForm=this._fb.group({
  //   StudentName:'',
  //   FatherName:'',
  //   DateOfBirth:'',
  //   PreviousInstitue:'',
  //   ClassId:'2',
  //   SectionId:'2',

  //   ClassName:'',
  //   SectionName:'',

  // });

  // }


  //  empForm:FormGroup;

  usernameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(15),
  ]);


  addApplication() {
    this.users.addUser(this.application).subscribe((response) => {
      console.log(response);
      this.dialogRef.close({ emp: response });
    });

  }
  openSnackBar() {
    const config = {
      horizontalPosition: 'right' as MatSnackBarHorizontalPosition,
      verticalPosition: 'right' as MatSnackBarVerticalPosition,
      duration: 4000, // Adjust the duration as needed
    };
    this._snackBar.open('The Data Added Successfully', '', config);
    console.log("the snackbar")

  }
  canceldialog() {
    this.application = {}
    this.dialogRef.close();

  }
}
