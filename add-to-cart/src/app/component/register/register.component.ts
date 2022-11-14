import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerUserData : any = {}
  public reg_status : string = ""
  constructor(private _auth : AuthService) { }

  ngOnInit(): void {
  }
  registerUser(){
    // console.log(this.registerUserData)
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res =>{
      this.reg_status=res.status
      // console.log(this.reg_status)
      if(this.reg_status=="Registered successfully"){
        Swal.fire("User has been registered successfully","Now Kindly Log Inn","success")
      }
      else if (this.reg_status=="Confirm-password must match Password"){
        Swal.fire("User Registration Failed","Password and Confirm-Password must match","error") 
      }
      else if (this.reg_status=="Confirm-password must match Password"){
        Swal.fire("User Registration Failed","Password and Confirm-Password must match","error") 
      }
      else if (this.reg_status=="failed to register Email issue"){
        Swal.fire("User Registration Failed","User already exist with this Email","error")
      }   
    }     
    ) 
  }
}
