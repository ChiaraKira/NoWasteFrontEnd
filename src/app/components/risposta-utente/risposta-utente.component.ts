import { Component, Input } from '@angular/core';
import { SceltaUtenteComponent } from '../scelta-utente/scelta-utente.component';
import { Ricetta } from 'src/app/model/ricetta';
import { SceltaUtenteService } from 'src/app/services/scelta-utente.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-risposta-utente',
  templateUrl: './risposta-utente.component.html',
  styleUrls: ['./risposta-utente.component.css']
})
export class RispostaUtenteComponent {

  @Input() ris: Ricetta[] = [];


  public constructor(route : ActivatedRoute, private http : HttpClient, private sceltaUtenteService: SceltaUtenteService){
  
    this.sceltaUtenteService.setRisposta(this.ris);
    this.sceltaUtenteService.getRisposta();
    this.ris = this.sceltaUtenteService.getRisposta();
  }

  
}
