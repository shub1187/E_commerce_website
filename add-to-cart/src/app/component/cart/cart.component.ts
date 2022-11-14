import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products :any = []; // Main array that is iterated in HTML component
  constructor(private cartService:CartService,private _auth:AuthService) { }
  public bill_no : string = "4458";
  public _token :any = ""  // used to store jwt token from localstorage if present
  public _member : any ="" // to show user_name from his email in Reciept generated in soft POPUP
  public _arr1 :any =[] // to store grandtotal & discount in an array used in HTML component
    
  
  ngOnInit(): void {
    this.cartService.getProduct()
    .subscribe(res=>{
      this.products = res;
      this._arr1 = this.cartService.getTotalPrice(); 
    })
    
  }
  removeItem(item:any){ // passing the item that we want to delete
    this.cartService.removeCartItem(item); //argument  item is passed that needs to be removed
  }
  emptycart(){
    this.cartService.removeAll()
  }

  handleCheckout(){
    this._token = localStorage.getItem("token") //storing JWT Token from localstorage
    if(this._token!=null){
      this._member =  localStorage.getItem("user_email")
    Swal.fire({
      title : `${this._member.split("@")[0].toUpperCase()} your order value is $ ${this._arr1[0]} Do you want to place the order ?`,
      icon:"warning",
      showCancelButton:true,
      confirmButtonText:"Place Order",
      cancelButtonText:"Cancel Order"
    }).then((result)=>{
      if(result.value){
        Swal.fire("Order placed successfully",` Invoice Number is 458234 Products will be delievered within 2 days`,"success")
      }
      else{
        Swal.fire("Order Cancelled","Items added to wishlist","error")
      }
    })
    }
    else{
      Swal.fire("Sorry...","You need to login first","error")
    }
  }
}
