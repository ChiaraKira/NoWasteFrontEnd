import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ricetta } from 'src/app/model/ricetta';
import { RicettaIngrediente } from 'src/app/model/ricetta-ingrediente';
import { DettaglioRicettaService } from 'src/app/services/dettaglio-ricetta.service';
import { LoginService } from 'src/app/services/login.service'; 
import { RicetteService } from 'src/app/services/ricette.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
                                    
  ricette? : Ricetta[];
  ricettaIngrediente? : RicettaIngrediente[];
  portataSelezionata?: string;
  portate? : string[];
  ricettaId!: number;
  
  @Input() ricetta?: Ricetta ;


  
  constructor( private http: HttpClient, public ricetteService: RicetteService, private route : ActivatedRoute, private dettaglioRicettaService : DettaglioRicettaService) { 
    this.http = http;
    
    
    
   
  }
  ngOnInit(): void {
    this.getAllRicette();
   
  }

  // getData(id : number): void {
  //   var token = sessionStorage.getItem("token");
  
  //   if (!token) {
  //     token = token as  string;
  //   }
  
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'token': token
  //   });
  //    this.http.get<any>('http://localhost:8080/api/recipe/recipeById?id=' + id , {headers}).subscribe(risposta =>{
  //     this.ricetta = risposta as Ricetta;
  //     })  
  // }
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
  
  
}
