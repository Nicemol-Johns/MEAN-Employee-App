import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { FormsModule,NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './logincomponent.html',
  styleUrls: ['./logincomponent.css']
})
export class logincomponent {

  constructor(private _auth:AuthService,private router:Router){}

  user = {
    email: '',
    password:'',
  };

  loginuser(){
    this._auth.loginuser(this.user).subscribe((res:any)=>{
    //  console.log(res.api);
     // console.log(res.token)
      localStorage.setItem('token',res.token);
      this.router.navigate([res.api]);
  
  })
  }

}
