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
  formCommento : FormGroup;

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
  
  
      this.http.post("http://localhost:8080/api/comment/commentsByRecipe?=recipeId" + this.getData(), body, {'headers' : headers}).subscribe(risposta => {
         this.ris  = risposta as Commento[];
        console.log(this.ris);
  
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
