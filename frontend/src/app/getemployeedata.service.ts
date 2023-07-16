//fetch the data from an external api
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetemployeedataService {

  constructor(public http:HttpClient) { }

  fetchData(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
