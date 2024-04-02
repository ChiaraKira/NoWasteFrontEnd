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
  // filtroPerPortata() {
  //   if (this.portataSelezionata) {
  //     this.ricette = this.ricetteService.getRicettePerPortata(this.portataSelezionata);
  //   } else {
  //     this.getAllRicette();
  //   }
  // }

}


