import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Ricetta } from 'src/app/model/ricetta';
import { RicettaIngrediente } from 'src/app/model/ricetta-ingrediente';
import { LoginService } from 'src/app/services/login.service';
import { RicetteService } from 'src/app/services/ricette.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  ricette? : Ricetta[];
  ricettaIngrediente? : RicettaIngrediente[];
  portataSelezionata?: string;
  portate? : string[];
  
  constructor( private http: HttpClient, public ricetteService: RicetteService) { 
  this.http = http;
    this.getAllRicette();
    console.log(this.ricette)
   
  }

  

  getAllRicette(){
    var token = sessionStorage.getItem("token")
    console.log(token)
    if(token == null){
      token = "admin-2";
    }
    const headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'token': token as string
      }
    );
    this.http.get("http://localhost:8080/api/recipe/allRecipes", {headers}).subscribe(risposta =>{
      this.ricette = risposta as Ricetta[];
    }); 
  }
}
