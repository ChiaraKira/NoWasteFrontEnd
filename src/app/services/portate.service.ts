import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RicetteService } from './ricette.service';
import { Ricetta } from '../model/ricetta';

@Injectable({
  providedIn: 'root'
})
export class PortateService {

  ricette?:Ricetta[];
  ricetteCopia?:Ricetta[];
  portate? : string[];


  constructor(private http : HttpClient, public ricetteService: RicetteService) {
    this.http = http;
   }
  }
