import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Ingrediente } from 'src/app/model/ingrediente';
import { AddIngredientiPopupService } from 'src/app/services/add-ingredienti-popup.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RicettaIngrediente } from 'src/app/model/ricetta-ingrediente';

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

  constructor(private popupService:AddIngredientiPopupService, private http : HttpClient){
    this.popupService.ingredienteAggiunto.subscribe( newIngrediente => 
      this.ingredienti.push(newIngrediente));
      this.getIngredienti();


  }


  getIngredienti(){

    var token =  sessionStorage.getItem('token');

    if(token == null){
      token = "admin-2";
    }

    const headers = new HttpHeaders(
      {'Content-Type' : 'application/json', 'token' : token as string}
      );

    this.http.get("http://localhost:8080/api/ingredients/allIngredients", {headers}).subscribe(risposta => {
      
      this.ingredienti = risposta as Ingrediente[];
    

    })
  }

  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
      if(this.currentStep == 2){
       
      }
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
  
  aggiungiIngrediente(){
    this.popupService.open();
  }
  

  selezionaIngrediente(ingrediente: Ingrediente, event: any) {
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
  
  inviaRicetta(){
   
  }
  


}


