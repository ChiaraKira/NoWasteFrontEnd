import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Commento } from 'src/app/model/commento';
import { Ingrediente } from 'src/app/model/ingrediente';
import { Ricetta } from 'src/app/model/ricetta';
import { RicettaIngrediente } from 'src/app/model/ricetta-ingrediente';
import { Utente } from 'src/app/model/utente';
import { CommentoService } from 'src/app/services/commento.service';
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
  punteggio? : number;

  commento: Commento = {
    id: 0,
    punteggio: 0,
    commento: '',
    utente: JSON.parse(sessionStorage.getItem('utente') || '{}') as Utente,
    idRicetta: JSON.parse(sessionStorage.getItem('idRicetta') || '0')
  };



  ris : Commento[] = [];

  constructor(private route: ActivatedRoute, 
              public dettaglioRicettaService: DettaglioRicettaService, 
              public ingredientiService: IngredientiService,
              private formBuilder: FormBuilder,
              private http : HttpClient,
              public commentoService: CommentoService,
              public router : Router) 
  {
    this.ricettaId = this.route.snapshot.params['id'];
    this.formCommento = this.formBuilder.group({ });
    // this.location.reload(); 
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
  
      const headers = {'Content-Type' : 'application/json', 'token' : token as string};
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
        this.commenti = data.commenti; 
        this.punteggio = data.commenti.punteggio;
      
        // console.log(this.commenti)
        // this.ricettaIngrediente = this.ricetta.ingredienti;
        // this.ingredientiService.getIngredienti();
        // this.dettaglioRicettaService.getSteps(this.ricetta);
      });
  }

  getStars(punteggio: number): string {
  let stars = '';
  for (let i = 0; i < punteggio; i++) {
    stars += '<i class="fas fa-star"></i>';
  }
  return stars;
}




sendCommentToBackend(commentForm: NgForm) {
  const formValues = commentForm.value;

  // Recupera il token dalla sessione
  const token = sessionStorage.getItem("token");
  const idutente = token?.split("-")[1] as unknown as number;
  // Imposta le intestazioni della richiesta HTTP con il token
  const headers = { 'Content-Type': 'application/json', 'token': token as string };
  
  // Crea l'oggetto del commento
  const commento: Commento = {
    id: this.generateUniqueId(), // Genera l'ID automaticamente
    punteggio: formValues.punteggio,
    commento: formValues.commento,
    utente : {
      id: idutente,
      nome: "",
      cognome: "",
      user: "",
      password: "",
      ruolo: ""
    },
    idRicetta : this.ricettaId
  };

  // Converti l'oggetto commento in formato JSON
  const body = JSON.stringify(commento);
  console.log(body);
  console.log(sessionStorage);

  // Effettua la chiamata HTTP POST per inviare il commento al backend
  this.http.post("http://localhost:8080/api/comment/addComment", body, { 'headers': headers }).subscribe(
    (risposta: any) => {
      this.ris = risposta;
       
      console.log(this.ris);
    },
    (error) => {
      console.error('Errore durante la chiamata al backend:', error);
    }
  );
}

generateUniqueId(): number {
  // Implementa qui la logica per generare un ID univoco
  // Ad esempio, puoi utilizzare un contatore che incrementa ogni volta che viene aggiunto un nuovo commento
  return Math.floor(Math.random() * 1000); // Esempio di generazione casuale dell'ID
}


convertiDifficolta(difficolta: number): string {     switch (difficolta) {   
      case 1:         return 'Facile';    
      case 2:         return 'Media';    
      case 3:         return 'Difficile';       
     default:         return 'Sconosciuta';     
    }  
  
}






}
