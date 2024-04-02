import { Component, Input } from '@angular/core';
import { Ingrediente } from 'src/app/model/ingrediente';

@Component({
  selector: 'app-ricetta-ingrediente-form',
  templateUrl: './ricetta-ingrediente-form.component.html',
  styleUrls: ['./ricetta-ingrediente-form.component.css']
})
export class RicettaIngredienteFormComponent {
  
  
  @Input() ingredientiSelezionati!: Ingrediente[];
  
  constructor(){

  }
}
