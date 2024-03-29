import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Ricetta } from 'src/app/model/ricetta';
import { DettaglioRicettaService } from 'src/app/services/dettaglio-ricetta.service';


@Component({
  selector: 'app-dettaglio-ricetta',
  templateUrl: './dettaglio-ricetta.component.html',
  styleUrls: ['./dettaglio-ricetta.component.css']
})
export class DettaglioRicettaComponent  {
<<<<<<< HEAD
ricetta: any;
=======


  // stringaDalBackend = this.ricetta?.istruzioni;
  // arrayValori: string[] ;

  @Input() ricetta?: Ricetta;
>>>>>>> 83a593e50d4aa0e07f0765cb27f9614d3f0e4d9a

  constructor(private http: HttpClient, public dettaglioRicettaService: DettaglioRicettaService) {
    // this.arrayValori? = this.stringaDalBackend.split("'\'") ;
    

  }

  ngOnInit(): void {
    this.dettaglioRicettaService.getRicetta();
    // this.dettaglioRicettaService.getStep();
    //da ciclare in html con indice incrementale in blocchi di div (ngfor con un ciclo che cicla getstep let step of getStep) 
    //e un altro ciclo che gira in maniera incremetale 
    
  }

  // getRicetta(): void {
  //   var token = sessionStorage.getItem("token");

  //   if (!token) {
  //     token = "admin-2";
  //   }

  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'token': token
  //   });

  //   const idRicetta = 2; // Assuming you want to fetch recipe with id 2

  //   this.http.get<Ricetta>("http://localhost:8080/api/recipe/recipeById?id=" + idRicetta, { headers }).subscribe(
  //     (response: Ricetta) => {
  //       this.ricetta = response;
  //     },
  //     (error) => {
  //       console.error('Error fetching recipe:', error);
  //     }
  //   );
  // }


 
  

}
