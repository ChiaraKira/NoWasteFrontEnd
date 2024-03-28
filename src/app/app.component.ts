import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Ricetta } from './model/ricetta';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() ricetta? : Ricetta[];

  title = 'NoWaste-FrontEnd';

  isMainPage = false;
  isLoginPage = false;

  constructor(private router : Router){
    this.router.events.subscribe(evento => {
      if(evento instanceof NavigationEnd){
        this.isMainPage = evento.urlAfterRedirects === "/";
      }
    });
    this.router.events.subscribe(evento => {
      if(evento instanceof NavigationEnd){
        this.isLoginPage = evento.urlAfterRedirects === "/loginpage";
      }
    });
  }
}
