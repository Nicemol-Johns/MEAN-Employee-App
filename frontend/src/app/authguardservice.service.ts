import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardserviceService {

  constructor() { }

  loggedIn():boolean{
    const adminloggedin = !!localStorage.getItem('token') && localStorage.getItem('role')==="admin";
    if(localStorage.getItem('role')==="user"){
      alert("Access Denied")
    }
    return adminloggedin
  }


}
