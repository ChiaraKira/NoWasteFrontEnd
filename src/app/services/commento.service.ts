import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Commento } from '../model/commento';

@Injectable({
  providedIn: 'root'
})
export class CommentoService {

  private baseUrl = 'http://localhost:8080/api/comment';

  constructor(private http: HttpClient) { }

  getCommentiByRicettaId(ricettaId: number): Observable<Commento[]> {
    return this.http.get<Commento[]>(`${this.baseUrl}/commentsByRecipe/${ricettaId}`);
  }
}
