import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Ingrediente } from '../model/ingrediente';
import { Ricetta } from '../model/ricetta';
import { IngredientiService } from './ingredienti.service';

@Injectable({
  providedIn: 'root'
})
export class SceltaUtenteService {

  ingredienti? : Ingrediente[];
  ricetta? : Ricetta[];
  formSceltaUtente : FormGroup;
  selectedValue: string = '';

  ris: Ricetta[] = [];

  constructor(private http:HttpClient, public ingredientiService:IngredientiService, private formBuilder:FormBuilder, private router:Router)
  {
   this.formSceltaUtente = this.formBuilder.group({});
   this.fechtIngredienti();
   selectedValue: [''];
  }

  ngOnInit():void
  {
    // this.ingredientiService.getIngredienti();
    // console.log(this.ingredientiService.getIngredienti());

  


  }

  fechtIngredienti() : void {
    this.ingredientiService.getIngredienti().subscribe((data: any[]) => {
        this.ingredienti = data;
        this.setupForm();
    })
  }

  setupForm(): void {
    this.ingredienti?.forEach(ingrediente => {
      this.formSceltaUtente.addControl(ingrediente.nome, new FormControl(false));
    });
  }

  onSubmit(): void {
    console.log(this.formSceltaUtente.value);
    // Esegui altre azioni qui, come inviare i dati al server, ecc.
  }
  
  submitSceltaIngredienti() {
    const formValues = this.formSceltaUtente?.value;

    const token = sessionStorage.getItem("token");

    const headers = {'Content-Type' : 'application/json', 'token' : "admin-2"}
    const body = JSON.stringify(formValues);


    this.http.post("http://localhost:8080/api/recipe/filterIngredientRecipes", body, {'headers' : headers}).subscribe(risposta => {
       this.ris  = risposta as Ricetta[];
      console.log(body);
       if(this.ris.length > 0){
        
        this.router.navigateByUrl('rispostaUtente'); // routing da rendirizzare al login
        alert(" ricetta trovata");
        console.log(this.router);
       }
       else{
         alert("Nessuna ricetta trovata");
         this.formSceltaUtente?.patchValue(
           {
            nome: ""
           }
         )
       }

     });

     
  }


  setRisposta(risposta: Ricetta[]) {
    this.ris = risposta;
  }

  getRisposta() {
    return this.ris;
  }

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  onSelectChange(event: any) {
    this.selectedValue = event.target.value;
  }
}


