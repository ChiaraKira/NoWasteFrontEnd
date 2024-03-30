import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ingrediente } from 'src/app/model/ingrediente';
import { Ricetta } from 'src/app/model/ricetta';
import { DettaglioRicettaService } from 'src/app/services/dettaglio-ricetta.service';



@Component({
  selector: 'app-dettaglio-ricetta',
  templateUrl: './dettaglio-ricetta.component.html',
  styleUrls: ['./dettaglio-ricetta.component.css']
})
export class DettaglioRicettaComponent  implements OnInit {
  ricettaId!: number;

 
  ricetta?: Ricetta;
  ingredienti?: Ingrediente;

  constructor(private http: HttpClient, public dettaglioRicettaService: DettaglioRicettaService, private route : ActivatedRoute) {
  
    

  }
  ngOnInit(): void {
    this.ricettaId = this.route.snapshot.params['id'];
    
    this.getData();
    this.dettaglioRicettaService.getSteps(this.ricetta!);
    console.log(this.ricetta);
    console.log(this.ricettaId);
    // this.dettaglioRicettaService.getStep();
    //da ciclare in html con indice incrementale in blocchi di div (ngfor con un ciclo che cicla getstep let step of getStep) 
    //e un altro ciclo che gira in maniera incremetale 
 
  }
  
  getData(): void {
    this.dettaglioRicettaService.getData(this.ricettaId)
      .subscribe(data => {
        // Fai qualcosa con i dati ottenuti dall'observable
       this.ricetta=data;
      });
  }
 


  // per agg porzioni logica nel service a tempo di esecuzione scateno evento che fa calcolo da front senza salvare niente in db e senza tyoccate il backend
  

 
  

}
