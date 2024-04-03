import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LoginService } from './services/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  token = sessionStorage.getItem("token");

  isMainPage = false;
  isLoggedIn = false;
  isLoginPage = false;

  constructor(private router : Router, public loginService : LoginService){
    loginService.checkLogin();
    this.isChecked();
    console.log(this.token);
    this.router.events.subscribe(evento => {
      if(evento instanceof NavigationEnd){
        this.isMainPage = evento.urlAfterRedirects === "";
        this.isLoginPage = evento.urlAfterRedirects === "";
      }
    });
  }

  public isChecked()
  {
    if(this.token != null && (this.token!.split('-')[0] == ('USER') || this.token!.split('-')[0] == ('ADMIN')) ? true : false)
    {
      this.isLoggedIn = true
    }
    else
    {
      this.isLoggedIn = false
    }
  }
}
