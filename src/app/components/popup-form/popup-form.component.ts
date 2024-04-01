import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Ingrediente } from 'src/app/model/ingrediente';
import { AddIngredientiPopupService } from 'src/app/services/add-ingredienti-popup.service';

@Component({
  selector: 'app-popup-form',
  templateUrl: './popup-form.component.html',
  styleUrls: ['./popup-form.component.css']
})
export class PopupFormComponent implements OnInit {

  ingredienteForm : FormGroup;

  constructor(public popupService: AddIngredientiPopupService, private formBuilder: FormBuilder) { 
    this.ingredienteForm = formBuilder.group(
      {nome:"", senzaGlutine:"",vegetariano:"",vegano:""}
      );
  }

  ngOnInit(): void {
  }

  add(){
    const formValues = this.ingredienteForm.value;
    const nuovoIngrediente: Ingrediente = {
      id : 0,
      nome: formValues.nome,
      senzaGlutine: formValues.senzaGlutine,
      vegetariano: formValues.vegetariano,
      vegano: formValues.vegano
    };

    this.popupService.aggiungiIngrediente(nuovoIngrediente);
    this.close();
  }

  close(){
    this.ingredienteForm.patchValue(  {nome:"", senzaGlutine:"",vegetariano:"",vegano:""});
    this.popupService.close();
  }
}