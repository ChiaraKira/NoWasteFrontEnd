import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Ingrediente } from 'src/app/model/ingrediente';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RicettaIngrediente } from 'src/app/model/ricetta-ingrediente';
import { LoginService } from 'src/app/services/login.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-ricetta',
  templateUrl: './form-ricetta.component.html',
  styleUrls: ['./form-ricetta.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(800)),
    ])
  ]
})
export class FormRicettaComponent {
  currentStep = 1;
  ingredienti!: Ingrediente[];
  ingredientiCheck : RicettaIngrediente[] = [];
  ricettaForm!: FormGroup;

  //aggiungiamo il popupService al nostro costruttore cosi possiamo richiamarlo dentro area-admin
  //utilizziamo httpClient per la richiesta al backed dei dati che ci serviranno
  //facciamo un push degli ingredienti selezionati dentro all'array ingredientiSelezionati
  constructor(
    // private popupService: AddIngredientiPopupService,
    private loginService: LoginService,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router
    ) {
    // this.popupService.ingredienteAggiunto.subscribe(newIngrediente => {
    //   this.ingredienti.push(newIngrediente);

    //   this.ricettaForm.addControl(`quantita${this.ingredienti.length}`, new FormControl(0));
    //   this.ricettaForm.addControl(`unitaMisura${this.ingredienti.length}`, new FormControl(''));
    // });
    this.getIngredienti();
    //loginService.checkLogin();
    this.initForm();

  }
  //prendiamo da backend la lista degli ingredienti con il metodo getIngredienti
  //gli passiamo all'interno il nostro token 
  getIngredienti() {

    var token = sessionStorage.getItem('token');


    if (token == null) {
      token = "admin-2"; //da rimuovere
    }

    const headers = new HttpHeaders(
      { 'Content-Type': 'application/json', 'token': token as string }
    );

    this.http.get("http://localhost:8080/api/ingredients/allIngredients", { headers }).subscribe(risposta => {

      this.ingredienti = risposta as Ingrediente[];

      this.ingredienti.forEach((ingrediente, i) => {
        this.ricettaForm.addControl(`quantita${i}`, new FormControl(0));
        this.ricettaForm.addControl(`unitaMisura${i}`, new FormControl(''));
      });

    })
  }


  //metodi bottoni che cambia fieldset
  nextStep() {
    if (this.currentStep < 2) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  //metodo apri popup preso dal popupService
  // aggiungiIngrediente() {
  //   this.popupService.open();
  // }


  //Questo metodo seleziona l'ingrediente checked e lo mette nella lista apposita
  //ovviamente abbiamo messo che non deve essere undefined
  //se l'admin decidesse di cambiare ingredienti si fa rispettivamente un push e uno splice
  //degli ingredienti checked così i dati non si ripetono

  selezionaIngrediente(ingrediente: Ingrediente, index:number, event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && inputElement.checked !== undefined) {
      const isChecked = inputElement.checked;
      if (isChecked) {
        var ricIng = {
          id: index,
          quantita: 0,
          unitaMisura: "",
          ingrediente: {} as Ingrediente,
          idRicetta: 0
        }

        ricIng.ingrediente = ingrediente;
        this.ingredientiCheck.push(ricIng);
      } else {
        const index = this.ingredientiCheck.findIndex(i => i.ingrediente == ingrediente);
        if (index != -1) {
          this.ingredientiCheck.splice(index, 1);
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
      linkImmagine: ['', Validators.required]
    });
  }

  //metodo utilizzato per mandare il json dentro a backend
  inviaRicetta() {
      const ricetta = {
        id: 0,
        nome: "",
        istruzioni: "",
        portata: 0,
        difficolta: 0,
        tempoPreparazione: 0,
        serving: 0,
        linkImmagine: "",
        ingredienti: [] as RicettaIngrediente[]
      }

      ricetta.nome = this.ricettaForm.get('nome')?.value;
      ricetta.istruzioni = this.ricettaForm.get('istruzioni')?.value;
      ricetta.portata = this.ricettaForm.get('portata')?.value;
      ricetta.difficolta = this.ricettaForm.get('difficolta')?.value;
      ricetta.serving = this.ricettaForm.get('serving')?.value;
      ricetta.tempoPreparazione = this.ricettaForm.get('tempoPreparazione')?.value;
      ricetta.linkImmagine = this.ricettaForm.get('linkImmagine')?.value;
      this.ingredientiCheck.forEach(ricettaIngrediente =>{
        ricettaIngrediente.quantita = this.ricettaForm.get(`quantita${ricettaIngrediente.id}`)?.value;
        ricettaIngrediente.unitaMisura = this.ricettaForm.get(`unitaMisura${ricettaIngrediente.id}`)?.value;
      })
      
      ricetta.ingredienti = this.ingredientiCheck;
    
      console.log(ricetta);
      var token = sessionStorage.getItem('token');


      if (token == null) {
        token = "admin-2"; //da rimuovere
      }

      const headers = new HttpHeaders(
        { 'Content-Type': 'application/json', 'token': token as string }
      );
      // Invia i dati al backend
      this.http.post("http://localhost:8080/api/recipe/addRecipe", ricetta, { headers }).subscribe(risposta => {
        var ris : boolean = risposta as boolean;
         if(ris){
           //Pagina login
           this.router.navigateByUrl('area-admin'); // routing da rendirizzare al login
         }
         else{
          alert("Ricetta non inserita");
         }
      });
    

  }
}
