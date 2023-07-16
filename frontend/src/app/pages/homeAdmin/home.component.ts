import { Component } from '@angular/core';
// import { GetemployeedataService } from 'src/app/getemployeedata.service';
import { OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { BackendAPIService } from 'src/app/backend-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private api:BackendAPIService,private router:Router){}
  employees: any[] = [];
  ngOnInit(){
    this.api.fetchData().subscribe((res:any)=>{
      this.employees = res.data
      //console.log(this.employees);
    })
  }
  editForm(id:any){
    //console.log(id)
    this.router.navigate(["/edit/"+id]);
  }
  deleteForm(id:any){
      this.api.delete(id).subscribe((res:any)=>{console.log('Success')})
      this.api.fetchData().subscribe((res:any)=>{
      this.employees = res.data
    })
  
}
}
