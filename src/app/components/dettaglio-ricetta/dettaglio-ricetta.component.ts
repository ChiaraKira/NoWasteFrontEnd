import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Ricetta } from 'src/app/model/ricetta';


@Component({
  selector: 'app-dettaglio-ricetta',
  templateUrl: './dettaglio-ricetta.component.html',
  styleUrls: ['./dettaglio-ricetta.component.css']
})
export class DettaglioRicettaComponent  {


  // stringaDalBackend = this.ricetta?.istruzioni;
  // arrayValori: string[] ;

  @Input() ricetta?: Ricetta;

  constructor(private http: HttpClient) {
    // this.arrayValori? = this.stringaDalBackend.split("'\'") ;
  }

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


 
  

}
