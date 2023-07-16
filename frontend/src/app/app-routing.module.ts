import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/homeAdmin/home.component';
import { logincomponent } from './pages/login/logincomponent';
import { EmployeeformComponent } from './pages/employeeform/employeeform.component';
import { ListComponent } from './components/list/list.component';
import { AddformComponent } from './pages/addform/addform.component';
import { EditformComponent } from './pages/editform/editform.component';
import { UserHomeComponent } from './pages/user-home/user-home.component';

const routes: Routes = [
  {path:"",component:logincomponent},
  {path:"home",component:HomeComponent}, //admin dashboard
  {path:"employeeform",component:AddformComponent}, //create
  {path:"edit/:id",component:EditformComponent}, //update
  {path:"user",component:UserHomeComponent} //user dashboard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
