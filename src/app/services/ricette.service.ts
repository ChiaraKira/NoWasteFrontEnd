import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ricetta } from '../model/ricetta';

@Injectable({
  providedIn: 'root'
})
export class RicetteService {

  ricette: Ricetta[] = [];

  constructor(private http : HttpClient) {
    this.http = http;
    this.getAllRicette();
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
    })
  }

  // getRicettePerPortata(portata: string): Ricetta[] {
  //   return this.ricette.filter(ricetta => ricetta.portata === portata);
  // }
}
