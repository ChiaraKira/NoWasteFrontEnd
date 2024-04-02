// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Component, Input, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Ingrediente } from 'src/app/model/ingrediente';
// import { Ricetta } from 'src/app/model/ricetta';
// import { RicettaIngrediente } from 'src/app/model/ricetta-ingrediente';
// import { DettaglioRicettaService } from 'src/app/services/dettaglio-ricetta.service';
// import { IngredientiService } from 'src/app/services/ingredienti.service';



// @Component({
//   selector: 'app-dettaglio-ricetta',
//   templateUrl: './dettaglio-ricetta.component.html',
//   styleUrls: ['./dettaglio-ricetta.component.css']
// })
// export class DettaglioRicettaComponent  implements OnInit {
//   ricettaId!: number;

 
//   ricetta?: Ricetta;
  
//   ricettaIngrediente?: RicettaIngrediente[];

//   constructor(private http: HttpClient, public dettaglioRicettaService: DettaglioRicettaService, private route : ActivatedRoute, public ingredientiService: IngredientiService) {
//     this.ricettaId = this.route.snapshot.params['id'];
//     this.getData();
//     console.log(this.getData())
//     this.ingredientiService.getIngredienti();
//     this.dettaglioRicettaService.getSteps(this.ricetta!);
//     this.ricettaIngrediente = this.ricetta?.ingredienti
    
//   }
//   ngOnInit(): void {
    
   
  
//     // this.dettaglioRicettaService.getStep();
//     //da ciclare in html con indice incrementale in blocchi di div (ngfor con un ciclo che cicla getstep let step of getStep) 
//     //e un altro ciclo che gira in maniera incremetale 
    
//   }
  
//   getData(): void {
//     this.dettaglioRicettaService.getData(this.ricettaId)
//       .subscribe(data => {
//         // Fai qualcosa con i dati ottenuti dall'observable
//        this.ricetta=data;

//       });
//   }
 


//   // per agg porzioni logica nel service a tempo di esecuzione scateno evento che fa calcolo da front senza salvare niente in db e senza tyoccate il backend
  

 
  

// }
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Commento } from 'src/app/model/commento';
import { Ingrediente } from 'src/app/model/ingrediente';
import { Ricetta } from 'src/app/model/ricetta';
import { RicettaIngrediente } from 'src/app/model/ricetta-ingrediente';
import { DettaglioRicettaService } from 'src/app/services/dettaglio-ricetta.service';
import { IngredientiService } from 'src/app/services/ingredienti.service';

@Component({
  selector: 'app-dettaglio-ricetta',
  templateUrl: './dettaglio-ricetta.component.html',
  styleUrls: ['./dettaglio-ricetta.component.css']
})
export class DettaglioRicettaComponent implements OnInit {
  ricettaId!: number;
  ricetta!: Ricetta;
  ricettaIngrediente!: RicettaIngrediente[];
  commenti? : Commento[];
  formCommento? : FormGroup;

  ris : Commento[] = [];

  constructor(private route: ActivatedRoute, 
              public dettaglioRicettaService: DettaglioRicettaService, 
              public ingredientiService: IngredientiService,
              private formBuilder: FormBuilder,
              private http : HttpClient) 
  {
    this.ricettaId = this.route.snapshot.params['id'];
    this.formCommento = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.getData();
    console.log(this.ricetta);
  }

  ngOnSubmit(): void {
    console.log(this.formCommento?.value);
  }

  submitCommento() {
      const formValues = this.formCommento?.value;
  
      const token = sessionStorage.getItem("token");
  
      const headers = {'Content-Type' : 'application/json', 'token' : "admin-2"}
      const body = JSON.stringify(formValues);
  
  
      this.http.post("http://localhost:8080/api/comment/commentsByRecipe?=id", body, {'headers' : headers}).subscribe(risposta => {
         this.ris  = risposta as Commento[];
        console.log(body);
         if(this.ris.length > 0){
          
          // this.router.navigate(['/rispostaUtente']);
  
          // console.log(this.router);
         }
         else{
           alert("Nessuna ricetta trovata");
           this.formCommento?.patchValue(
             {
              commento: ""
             }
           )
         }
  
       });
  
       
    }
  

  getData(): void {
    this.dettaglioRicettaService.getData(this.ricettaId)
      .subscribe(data => {
        this.ricetta = data;
        console.log(data)
        // this.ricettaIngrediente = this.ricetta.ingredienti;
        // this.ingredientiService.getIngredienti();
        // this.dettaglioRicettaService.getSteps(this.ricetta);
      });
  }



}
