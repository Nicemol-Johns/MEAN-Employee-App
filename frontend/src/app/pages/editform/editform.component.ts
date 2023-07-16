import { Component } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
import { BackendAPIService } from 'src/app/backend-api.service';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent {

  constructor(private api:BackendAPIService,private router:Router,private activatedRoute:ActivatedRoute){}

  employee={
    id:'',
    name:'',
    designation:'',
    salary:'',
    location:''
  }

  ngOnInit():void{
    const id=this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getDetails(id).subscribe((res:any)=>{
      this.employee.id=res.data._id;
      this.employee.name = res.data.name;
      this.employee.designation = res.data.designation;
      this.employee.salary = res.data.salary;
      this.employee.location = res.data.location;
    })
  }


  onSubmit(){
    //console.log('The form data is:',this.employee);

    this.api.editEmployeeData(this.employee,this.employee.id).subscribe(
      (data) => {
        console.log('success');
      }
   );
    this.router.navigate(["/home"])
  }
}
