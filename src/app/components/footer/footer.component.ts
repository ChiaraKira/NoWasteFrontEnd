import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  bubbles: any[] = [];

  constructor(private http : HttpClient, private loginservice : LoginService) {
    // Genera i dati casuali per le bolle
    for (let i = 0; i < 128; i++) {
      const size = 2 + Math.random() * 4;
      const distance = 6 + Math.random() * 4;
      const position = -5 + Math.random() * 110;
      const time = 2 + Math.random() * 2;
      const delay = -1 * (2 + Math.random() * 2);

      // Aggiungi l'oggetto bolla all'array delle bolle
      this.bubbles.push({ size, distance, position, time, delay });
      this.http = http;
      this.loginservice.checkLogin();
    }
  }
}
