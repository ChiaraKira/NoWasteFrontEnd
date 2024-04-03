import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private http: HttpClient) { }

  submitRating(rating: number) {
    // Invia la richiesta HTTP al backend per salvare il punteggio
    return this.http.post('/api/save-rating', { rating });
  }
}
