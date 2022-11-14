import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalItem : number = 0;
  public user_email : any

  constructor(private cartService:CartService,private router :Router) { }

  ngOnInit(): void {
    this.cartService.getProduct()
    .subscribe(res=>{
      this.totalItem=res.length; // to send data to HTML component in that red box via Data-Binding using Interpolation in HTML 
    })
    

  this.getUser()
  this.user_email=(this.getUser()) // to send data to HTML component Dynamic logged inn User_name via Data-Binding using Interpolation in HTML 
  // console.log(this.user_email)
  }
  handleLogout(){        // Implementing logout functionality to clear the data present in Local storage
    // window.location.reload(); 
    this.cartService.removeAll()
    localStorage.clear()
    this.router.navigate(["/"])
  }
  getUser(){
    return localStorage.getItem("user_email")
   }  
}
