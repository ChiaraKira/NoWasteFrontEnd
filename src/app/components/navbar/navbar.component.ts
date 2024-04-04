import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isAdmin = false;

  constructor(private loginService: LoginService){
    if(sessionStorage.getItem('token') != null){
      this.isAdmin = sessionStorage.getItem('token')?.split("-")[0] == 'ADMIN';
    }
  }

  
  public logout()
  {
    this.loginService.logout();
  }
}
