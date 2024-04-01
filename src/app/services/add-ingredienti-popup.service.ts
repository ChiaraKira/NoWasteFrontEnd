import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingrediente } from '../model/ingrediente';

@Injectable({
  providedIn: 'root'
})
export class AddIngredientiPopupService {
  isOpen: boolean = false;

  constructor() { }

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  ingredienteAggiunto = new Subject<Ingrediente>();
  
  aggiungiIngrediente(ingrediente: Ingrediente) {
    this.ingredienteAggiunto.next(ingrediente);
  }
}
