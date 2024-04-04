import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Ricetta } from 'src/app/model/ricetta';

@Component({
  selector: 'app-carosel',
  templateUrl: './carosel.component.html',
  styleUrls: ['./carosel.component.css']
})
export class CaroselComponent {
   ricetta?: Ricetta ;
   ricette?: Ricetta[] ;

  constructor (private http  : HttpClient) {
    this.getAllRicette();
  }

  getAllRicette(): void {
    var token = sessionStorage.getItem("token")
   
    if(token == null){
      token = "admin-2";
    }
    const headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'token': token as string
      }
    );
    this.http.get<Ricetta[]>("http://localhost:8080/api/recipe/allRecipes", {headers}).subscribe(
      risposta => {
        this.ricette = risposta;
      
      },
      error => {
        console.error(error);
      }
    );
  }
}


