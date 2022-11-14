import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[]; //main array for performing all the cart operations add,delete,delete-all
  public productList= new BehaviorSubject<any>([]); //ProductList will act as both will emit data as well as absorb data
  public arr : any =[]  // used to store the grandTotal and discount
  constructor() { }

  getProduct(){
   return this.productList.asObservable(); // sending chunk data (streams-data) in form of Observable who all wants this data can subscribe it
  }
  setProduct(product:any){
    this.cartItemList.push(...product) // pushing items to cartlist array this array is used to make our cartpage
    this.productList.next(product); //.next() method is used to send data to the observable
  }
  addtoCart(product:any){     // Adding products to cart
    this.cartItemList.push(product)
    this.productList.next(this.cartItemList); //updating our observable.
    this.getTotalPrice();
  }
  getTotalPrice(): number{
     this.arr = [];
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal+=a.total;
    })
    if(grandTotal>50){    // logic for getting 10% discount on grandtotal
     let discount = (grandTotal*0.1).toFixed(2)
      grandTotal = (grandTotal - (grandTotal*0.1))  
      this.arr.push(grandTotal);
      this.arr.push(discount)
    }
    else{
      this.arr.push(grandTotal);
      this.arr.push(0)
    }
    return this.arr;
  }
  removeCartItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{  // deleting single item using its id from cartList
      if(product.id===a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList); //updating our observable.
  }
  removeAll (){
    this.cartItemList=[];           // deleting all the items from cartList
    this.productList.next(this.cartItemList); //updating our observable.
  }
}
