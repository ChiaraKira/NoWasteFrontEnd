import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RicetteService } from './ricette.service';
import { Ricetta } from '../model/ricetta';

@Injectable({
  providedIn: 'root'
})
export class PortateService {

  ricette?:Ricetta[];
  ricetteCopia?:Ricetta[];
  portate? : string[];


  constructor(private http : HttpClient, public ricetteService: RicetteService) {
    this.http = http;
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
}
