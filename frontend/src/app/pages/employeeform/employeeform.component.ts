import { Component } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import { Router } from '@angular/router'
import { BackendAPIService } from 'src/app/backend-api.service';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent {

  constructor(private api:BackendAPIService,private router:Router){}

  employee={
    name:'',
    designation:'',
    salary:'',
    location:''
  }

  onSubmit(){
    //console.log('The form data is:',this.employee);
    // this.api.addEmployeeData(this.employee).subscribe(data=>console.log(data));

    this.api.addEmployeeData(this.employee).subscribe(
      (data) => {
        console.log('success');
      }
    );
    this.router.navigate(["/home"])
  }

}
