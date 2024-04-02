import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Ingrediente } from 'src/app/model/ingrediente';
import { Ricetta } from 'src/app/model/ricetta';
import { IngredientiService } from 'src/app/services/ingredienti.service';
import { trigger, state, style, animate, keyframes, transition } from '@angular/animations';

import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-scelta-utente',
  templateUrl: './scelta-utente.component.html',
  styleUrls: ['./scelta-utente.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1600)),
    ]),
   trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }), // Elementi entrano da sinistra
        animate('800ms ease-in-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('800ms ease-in-out', style({ transform: 'translateX(100%)', opacity: 0 })) // Elementi escono verso destra
      ])
    ]),
  ]
})



export class SceltaUtenteComponent {

  shakeState = 'inactive';

  ingredienti? : Ingrediente[];
  ricetta? : Ricetta[];
  formSceltaUtente : FormGroup;
  selectedValue: string = '';

  ris: Ricetta[] = [];

  constructor(private route : ActivatedRoute , private http:HttpClient, public ingredientiService:IngredientiService, private formBuilder:FormBuilder, private router:Router)
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

    const headers = {'Content-Type' : 'application/json', 'token' : token as string};
    const body = JSON.stringify(formValues);


    this.http.post("http://localhost:8080/api/recipe/filterIngredientRecipes", body, {'headers' : headers}).subscribe(risposta => {
       this.ris  = risposta as Ricetta[];
      console.log(body);
       if(this.ris.length > 0){
        
        this.router.navigate(['/rispostaUtente']);

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

  startShakeAnimation() {
    this.shakeState = 'active';
    setTimeout(() => this.shakeState = 'inactive', 500);
  }
}
