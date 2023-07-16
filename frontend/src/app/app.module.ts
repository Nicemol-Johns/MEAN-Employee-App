import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/homeAdmin/home.component';
import { logincomponent } from './pages/login/logincomponent';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListComponent } from './components/list/list.component';

import { HTTP_INTERCEPTORS, HttpClient,HttpEvent,HttpHandler, HttpClientModule} from '@angular/common/http'
import { GetemployeedataService } from './getemployeedata.service';

import { FormsModule } from '@angular/forms';
import { EmployeeformComponent } from './pages/employeeform/employeeform.component';
import { AuthService } from './auth.service';
import { AddformComponent } from './pages/addform/addform.component';
import { UserHomeComponent } from './pages/user-home/user-home.component';
import { BackendAPIService } from './backend-api.service';
import { EditformComponent } from './pages/editform/editform.component';
import { TokeninterceptorService } from './tokeninterceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    logincomponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    EmployeeformComponent,
    AddformComponent,
    UserHomeComponent,
    EditformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GetemployeedataService,
              AuthService,
              BackendAPIService,
            {
              provide:HTTP_INTERCEPTORS,
              useClass:TokeninterceptorService,
              multi:true
            }
          ],
  bootstrap: [AppComponent]
})
export class AppModule { }
