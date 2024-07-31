import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProjectApiService } from '../project-api.service'; 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private userapi:ProjectApiService){}
    
  
  user = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    password: new FormControl('')
    

  })
  
  signup(){
    this.userapi.addUser(this.user.value).subscribe((result)=>{
      console.log(result)
    })
   
  }
}
