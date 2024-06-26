import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
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
  
  constructor( private http: HttpClient, public ricetteService: RicetteService, private router: Router) { 
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
  getAllPortate(){
    var token = sessionStorage.getItem("token")
    const headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'token': token as string
      }
    );
    this.http.get("http://localhost:8080/api/recipe/allPortate", {headers}).subscribe(risposta =>{
      this.portate = risposta as string[];
    });
  }

  // filtroPerPortata() {
  //   if (this.portataSelezionata) {
  //     this.ricette = this.ricetteService.getRicettePerPortata(this.portataSelezionata);
  //   } else {
  //     this.getAllRicette();
  //   }
  // }

  getRicettePerPortata(portata : string)
  {
    
    if(portata != "")
    {
      this.ricetteCopia = this.ricette!.filter(ricetta => ricetta.portata === portata).slice();
    }
    else
    {
      this.ricetteCopia = this.ricette!.slice();
    }
  }

  convertiDifficolta(difficolta: number): string {
    switch (difficolta) {
      case 1:
        return 'Facile';
      case 2:
        return 'Media';
      case 3:
        return 'Difficile';
      default:
        return 'Sconosciuta';
    }
  }

  isAdmin() : boolean{
    var token = sessionStorage.getItem("token")
    if(token != null && token.split("-")[0] == "ADMIN")
    {
      return true;
    }
    return false;
  }

  deleteRicetta(ricetta:Ricetta)
  {
    var token = sessionStorage.getItem("token")
    const headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'token': token as string
      }
    );

    this.http.delete("http://localhost:8080/api/recipe/deleteRecipe?id=" + ricetta.id, {headers}).subscribe(risposta =>{
      risposta as boolean;
      if(risposta)
      {
        alert("Ricetta eliminata con successo!");
        let index = this.ricette?.findIndex(r => r.id === ricetta.id)
        this.ricette?.splice(index!, 1);
        let indexCopia = this.ricetteCopia?.findIndex(r => r.id === ricetta.id)
        this.ricetteCopia?.splice(indexCopia!, 1);
      }
      else
      {
        alert("Ricetta non eliminata");
      }
    });
  }

}


