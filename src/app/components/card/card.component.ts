import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

   constructor(private http : HttpClient, private loginService: LoginService){
    this.http = http;
    this.loginService.checkLogin();
  }
}
