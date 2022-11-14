import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import {Router} from '@angular/router'
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginUserData : any ={}  // storing our login user email and password in object form to send it to backend
  constructor(private _auth:AuthService,private router :Router) { }
  
  ngOnInit(): void {
  }

  loginUser(){
    this._auth.loginUser(this.loginUserData)  //passing data to auth service as an object 
    .subscribe(
      res => {console.log(res)
        if(res.status=="Failed to login"){
          Swal.fire("Failed to Login","Credentials not matching!!","error")
        }
        else if(res.status=="Failed to login User does not exist"){
          Swal.fire("Failed to Login","Kindly Register First!! User does not exist","error")
        }
        else if(res.status=="Logged Inn Succesfully"){
          Swal.fire("Logged Inn Successfully","Happy Shopping!!","success")
          localStorage.setItem("token",res.token)
          localStorage.setItem("user_email",res.user_email)
        }
        this.router.navigate(["/"]) // navigating to homepage after completion of login task
      
      }
    )
  }
}
