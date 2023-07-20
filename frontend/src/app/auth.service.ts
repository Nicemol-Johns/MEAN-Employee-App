import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;

  constructor(private http:HttpClient) { }

  loginuser(user:any){
    return this.http.post<any>(`https://localhost:3000/api/authlogin`,user);
  }
}
