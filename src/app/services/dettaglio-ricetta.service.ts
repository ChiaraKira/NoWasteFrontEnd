import { Injectable, Input, OnInit } from '@angular/core';
import { Ricetta } from '../model/ricetta';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DettaglioRicettaService implements OnInit {

  @Input() ricetta?: Ricetta;
  
  
  

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getRicetta();
  }

  getRicetta(): void {
    var token = sessionStorage.getItem("token");

    if (!token) {
      token = "admin-2";
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': token
    });

    const idRicetta = 2; // Assuming you want to fetch recipe with id 2

    this.http.get<Ricetta>("http://localhost:8080/api/recipe/recipeById?id=" + idRicetta, { headers }).subscribe(
      (response: Ricetta) => {
        this.ricetta = response;
      },
      (error) => {
        console.error('Error fetching recipe:', error);
      }
    );
  }

  
  getStep(){
   var  istruzioni = this.ricetta?.istruzioni.split("\n");
   console.log(istruzioni);
    //deve essere chiamato nell'html 
  }
}
