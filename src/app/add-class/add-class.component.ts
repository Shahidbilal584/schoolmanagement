import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProjectApiService } from '../project-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent {
   
  constructor(private fb:FormBuilder ,private dialogRef: MatDialogRef<AddClassComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    private classapi: ProjectApiService) { }
  classAdd() {
    if(this.classData.valid){
      this.classapi.addClass(this.classData.value).subscribe((result) => {
        console.log(result);
        this.dialogRef.close(result);
      });
    }
    
    
  }

  classData: FormGroup = this.fb.group({
  ClassName:['',Validators.required]
  });

  cancelDialog() {
    this.dialogRef.close();
  }
}

