import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BackendAPIService {
  data:any
  constructor(private http:HttpClient) { }

  addEmployeeData(data:any) {
    //console.dir('Data:', data);
    return this.http.post<any>(`https://localhost:3000/api/addemployee`, data);
  }

  editEmployeeData(updated:any,id:any) {
    //console.dir('Data:', updated);
    return this.http.put(`https://localhost:3000/api/editemployee/${id}`, updated);
  }

  fetchData(){
    //console.log('Sending request')
    return this.http.get(`https://localhost:3000/api/fetchdata`);
  }

  getDetails(id:any){
    return this.http.get(`https://localhost:3000/api/userform/${id}`); 
  }

  delete(id:any){
    return this.http.delete(`https://localhost:3000/api/deleteform/${id}`);
  }

  
}
