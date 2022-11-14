// Writing auth service to send Users Login & Register  data to backend using http.post method

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:8080/register" // back end register url
  private _loginUrl = "http://localhost:8080/login";  // backend login url
  constructor(private http : HttpClient) { }

  registerUser(user:any){  //user data is stored from html using ngModel directive
  return  this.http.post<any>(this._registerUrl,user)
  }

  loginUser(user:any){ //user data is stored from html using ngModel directive
  return  this.http.post<any>(this._loginUrl,user)
  }

}
