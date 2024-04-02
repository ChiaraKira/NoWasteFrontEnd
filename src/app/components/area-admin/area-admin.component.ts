import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Ingrediente } from 'src/app/model/ingrediente';
import { AddIngredientiPopupService } from 'src/app/services/add-ingredienti-popup.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RicettaIngrediente } from 'src/app/model/ricetta-ingrediente';
import { LoginService } from 'src/app/services/login.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-area-admin',
  templateUrl: './area-admin.component.html',
  styleUrls: ['./area-admin.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(800)),
    ])
  ]
})
export class AreaAdminComponent {

  currentStep = 1;
  ingredienti! : Ingrediente[];
  ingredientiSelezionati: Ingrediente[] = [];
  //ingredientiCheck : RicettaIngrediente[];
  ricettaForm! : FormGroup;

  //aggiungiamo il popupService al nostro costruttore cosi possiamo richiamarlo dentro area-admin
  //utilizziamo httpClient per la richiesta al backed dei dati che ci serviranno
  //facciamo un push degli ingredienti selezionati dentro all'array ingredientiSelezionati
  constructor(
    private popupService:AddIngredientiPopupService, 
    private loginService: LoginService ,
    private http : HttpClient, 
    private formBuilder : FormBuilder)
  {
    this.popupService.ingredienteAggiunto.subscribe( newIngrediente => 
      this.ingredienti.push(newIngrediente));
      this.getIngredienti();
      //loginService.checkLogin();
      this.initForm();

  }
  //prendiamo da backend la lista degli ingredienti con il metodo getIngredienti
  //gli passiamo all'interno il nostro token 
  getIngredienti(){

    var token =  sessionStorage.getItem('token');

    
     if(token == null){
       token = "admin-2"; //da rimuovere
     }

    const headers = new HttpHeaders(
      {'Content-Type' : 'application/json', 'token' : token as string}
      );

    this.http.get("http://localhost:8080/api/ingredients/allIngredients", {headers}).subscribe(risposta => {
      
      this.ingredienti = risposta as Ingrediente[];
    

    })
  }


  //metodi bottoni che cambia fieldset
  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
  
  //metodo apri popup preso dal popupService
  aggiungiIngrediente(){
    this.popupService.open();
  }
  

  //Questo metodo seleziona l'ingrediente checked e lo mette nella lista apposita
  //ovviamente abbiamo messo che non deve essere undefined
  //se l'admin decidesse di cambiare ingredienti si fa rispettivamente un push e uno splice
  //degli ingredienti checked così i dati non si ripetono
  
  selezionaIngrediente(ingrediente: Ingrediente, event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && inputElement.checked !== undefined) {
      const isChecked = inputElement.checked;
      if (isChecked) {
        this.ingredientiSelezionati.push(ingrediente);
      } else {
        const index = this.ingredientiSelezionati.findIndex(i => i === ingrediente);
        if (index !== -1) {
          this.ingredientiSelezionati.splice(index, 1);
        }
      }
    }
  }
  

  //Validator è un validatore fornito da angular che garantisce
  // il campo del form non sia vuoto ed é richiesto da noi
  initForm() {
    this.ricettaForm = this.formBuilder.group({
      nome: ['', Validators.required],
      istruzioni: ['', Validators.required],
      portata: [0, Validators.required],
      difficolta: [0, Validators.required],
      serving: [0, Validators.required],
      tempoPreparazione: [0, Validators.required],
      linkImmagine: ['', Validators.required],
     ingredienti: this.formBuilder.array([])
    });
  }

  //metodo utilizzato per mandare il json dentro a backend
  inviaRicetta() {

    if (this.ricettaForm.valid) { //controlla se il FORM è valido
      const ricetta = {
      id: 0,
      nome: "",
      istruzioni: "",
      portata: 0,
      difficolta: 0,
      tempoPreparazione: 0,
      serving: 0,
      linkImmagine: "",
      ingredienti: []
    }

      ricetta.nome = this.ricettaForm.get('nome')?.value;
      ricetta.istruzioni =  this.ricettaForm.get('istruzioni')?.value;
      ricetta.portata =  this.ricettaForm.get('portata')?.value;
      ricetta.difficolta = this.ricettaForm.get('difficolta')?.value;
      ricetta.serving = this.ricettaForm.get('serving')?.value;
      ricetta.tempoPreparazione = this.ricettaForm.get('tempoPreparazione')?.value;
      ricetta.linkImmagine = this.ricettaForm.get('linkImmagine')?.value;
              // Aggiungi gli ingredienti selezionati alla formData
      this.ingredientiSelezionati.forEach((ingrediente, index) => {
        var ricIng = {
          id: 0,
          quantita: 0,
          unitaMisura: "",
          ingrediente: {},
          idRicetta: 0
        }
        ricIng.quantita = this.ricettaForm.get(`quantita${index}`)?.value;
        ricIng.unitaMisura = this.ricettaForm.get(`unitaMisura${index}`)?.value;
        ricIng.ingrediente = ingrediente;

      });

      var token =  sessionStorage.getItem('token');

    
      if(token == null){
        token = "admin-2"; //da rimuovere
      }
 
     const headers = new HttpHeaders(
        {'Content-Type' : 'application/json', 'token' : token as string}
      );
      // Invia i dati al backend
      this.http.post("http://localhost:8080/api/recipe/addRecipe", ricetta,  {headers}).subscribe(risposta => {
        // Logica per gestire la risposta dal backend
        console.log(risposta);
      });
    }
  }


}


