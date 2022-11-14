import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productList : any; // Storing data coming from the api
  constructor(private api : ApiService,private cartService:CartService,private router :Router) { }
  public updated_productList : any =[] //to store data as per category filteration men women jwellery
  public product_store : any = [] // array to store all 20 items
  ngOnInit(): void {  
    this.api.getProduct()  // calling api
    .subscribe(res=>{
      this.productList=res;   // getting data from Observable
      this.productList.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price}); // Our table has additional detailas as compared to data from Api
        
      })
      this.product_store = this.productList; //storing all the data 20items in product_store
      this.updated_productList=this.product_store
    })
    
  }
  addtocart(item:any){
    this.cartService.addtoCart(item)  // button below every product to add product to cart list array
  }
  handleCategory(cat:any){  // getting this parameter from HTML component making use of Event-Binding
    // console.log(cat);
    this.updated_productList=[];
    if(cat=="allproduct"){
      this.updated_productList=this.product_store
    }
    for(let i=0;i<this.product_store.length;i++){   //logic for filteration as per category
      if(this.product_store[i].category == cat){
        this.updated_productList.push(this.product_store[i])
      }
    }
    if(cat=="women"){
    let find = "women's clothing";
    for(let i=0;i<this.product_store.length;i++){
      if(this.product_store[i].category == find){
        this.updated_productList.push(this.product_store[i])
      }
    }
  }
  if(cat=="men"){
    let find = "men's clothing";
    for(let i=0;i<this.product_store.length;i++){
      if(this.product_store[i].category == find){
        this.updated_productList.push(this.product_store[i])
      }
    }
  }
}
}
