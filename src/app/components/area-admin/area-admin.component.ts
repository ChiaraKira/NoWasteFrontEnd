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
  
}
