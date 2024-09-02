import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { LoginService } from '../../../services/login.service';


@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, LoginComponent, RegisterComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})


export class NavigationComponent {

  // loginService = inject(LoginService);


  isVisibleLogin: boolean = false;
  isVisibleRegister: boolean = false;


  toggleLogin(){
    this.isVisibleLogin = !this.isVisibleLogin;
    this.isVisibleRegister = false;
  } 

  toggleRegister(){
    this.isVisibleRegister = !this.isVisibleRegister;
    this.isVisibleLogin = false;
  } 

  closeSesion(){
    // this.loginService.logout()
  }
}
