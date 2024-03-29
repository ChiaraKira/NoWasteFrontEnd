import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Ingrediente } from 'src/app/model/ingrediente';
import { Ricetta } from 'src/app/model/ricetta';
import { IngredientiService } from 'src/app/services/ingredienti.service';

@Component({
  selector: 'app-scelta-utente',
  templateUrl: './scelta-utente.component.html',
  styleUrls: ['./scelta-utente.component.css']
})
export class SceltaUtenteComponent {

  ingredienti? : Ingrediente[];
  ricetta? : Ricetta[];
  formSceltaUtente : FormGroup;

  ris: Ricetta[] = [];

  constructor(private http:HttpClient, public ingredientiService:IngredientiService, private formBuilder:FormBuilder)
  {
   this.formSceltaUtente = this.formBuilder.group({});
   this.fechtIngredienti();
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
         //Pagina login
        //  this.router.navigateByUrl('/'); // routing da rendirizzare al login
        alert(" ricetta trovata");
        console.log(formValues);
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
}
