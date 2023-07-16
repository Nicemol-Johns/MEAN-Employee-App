import { Component } from '@angular/core';
import { OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { BackendAPIService } from 'src/app/backend-api.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  constructor(private api:BackendAPIService,private router:Router){}
  employees: any[] = [];
  ngOnInit(){
    this.api.fetchData().subscribe((res:any)=>{
      this.employees = res.data
      //console.log(this.employees);
    })
  }
}
