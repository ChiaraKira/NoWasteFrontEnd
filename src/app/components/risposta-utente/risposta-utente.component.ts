import { Component, Input } from '@angular/core';
import { SceltaUtenteComponent } from '../scelta-utente/scelta-utente.component';
import { Ricetta } from 'src/app/model/ricetta';

@Component({
  selector: 'app-risposta-utente',
  templateUrl: './risposta-utente.component.html',
  styleUrls: ['./risposta-utente.component.css']
})
export class RispostaUtenteComponent {

@Input() ris? : Ricetta[];

  private constructor(){

  }
}
