import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Ricetta } from 'src/app/model/ricetta';
import { RicettaIngrediente } from 'src/app/model/ricetta-ingrediente';
import { RicetteService } from 'src/app/services/ricette.service';

@Component({
  selector: 'app-lista-ricette',
  templateUrl: './lista-ricette.component.html',
  styleUrls: ['./lista-ricette.component.css']
})
export class ListaRicetteComponent {

  ricette? : Ricetta[];
  ricetteCopia? : Ricetta[];
  ricettaIngrediente? : RicettaIngrediente[];
  portataSelezionata?: string = "";
  portate? : string[];
  
  constructor( private http: HttpClient, public ricetteService: RicetteService) { 
  this.http = http;
    this.getAllRicette();
    this.getAllPortate();
  }

  

  getAllRicette(){
    var token = sessionStorage.getItem("token")
    const headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'token': token as string
      }
    );
    this.http.get("http://localhost:8080/api/recipe/allRecipes", {headers}).subscribe(risposta =>{
      this.ricette = risposta as Ricetta[];
      this.ricetteCopia = this.ricette;
    }); 
  }



}


