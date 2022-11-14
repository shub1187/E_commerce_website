// Writing API service to fetch data from open source api

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getProduct(){
    return this.http.get<any>("https://fakestoreapi.com/products") //Fetching data from open source API in form of array JSON object
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
