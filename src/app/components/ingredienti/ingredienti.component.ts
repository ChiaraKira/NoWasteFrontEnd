import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Ingrediente } from 'src/app/model/ingrediente';
import { Ricetta } from 'src/app/model/ricetta';
import { IngredientiService } from 'src/app/services/ingredienti.service';



@Component({
  selector: 'app-ingredienti',
  templateUrl: './ingredienti.component.html',
  styleUrls: ['./ingredienti.component.css']
})
export class IngredientiComponent {

  ricetta? : Ricetta[];
  ingredienti? : Ingrediente[];

  constructor(private http : HttpClient, public ingredientiService : IngredientiService ) { }

  // onInit() {
  //   this.ingredienti = this.ingredientiService.getIngredienti();
    
  // }
}
