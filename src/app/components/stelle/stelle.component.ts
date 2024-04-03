import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RatingService } from 'src/app/services/rating.service';
  
interface Rating {
  id: number;
}

@Component({
  selector: 'app-stelle',
  templateUrl: './stelle.component.html',
  styleUrls: ['./stelle.component.css']
})
export class StelleComponent implements OnInit {
  ratings: Rating[] = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 }
  ];
  ratingForm!: FormGroup;
  selectedRating: number | undefined;

  constructor(private formBuilder: FormBuilder, private ratingService: RatingService) { }

  ngOnInit(): void {
    this.ratingForm = this.formBuilder.group({
      rating: [null]
    });
    this.ratingForm.get('rating')?.valueChanges.subscribe(value => {
      this.selectedRating = value;
    });
  }

  submitRating() {
    if (this.selectedRating !== undefined) {
      this.ratingService.submitRating(this.selectedRating).subscribe(() => {
        // Se necessario, aggiungi qui logica aggiuntiva dopo aver inviato il punteggio al backend
        console.log('Punteggio inviato con successo al backend');
      }, error => {
        console.error('Errore durante l\'invio del punteggio al backend:', error);
      });
    }
  }
}
