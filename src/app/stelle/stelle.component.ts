import { Component, OnInit } from '@angular/core';

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
  rating: Rating | undefined ;

  constructor() { }

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    const form = document.querySelector('form');

    if (form) {
      form.addEventListener("change", (e) => this.updateRating(e));

      // Stop Firefox from preserving form data between refreshes
      try {
        (form as HTMLFormElement).reset();
      } catch (err) {
        console.error("Element isn’t a form.");
      }
    }
  }

  updateRating(event: Event): void {
    const target = event.target as HTMLInputElement;
    const selectedRatingId = parseInt(target.value);
    const prevRatingID = this.rating ? this.rating.id : 0;

    let delay = 0;
    this.rating = this.ratings.find(rating => rating.id === selectedRatingId);

    this.ratings.forEach(rating => {
      const { id } = rating;

      // Add the delays
      if (id > prevRatingID + 1 && id <= selectedRatingId) {
        delay++;
        const ratingLabel = document.querySelector(`[for="rating-${id}"]`);
        if (ratingLabel) {
          ratingLabel.classList.add(`rating__label--delay${delay}`);
        }
      }

      // Hide ratings to not read, show the one to read
      const ratingTextEl = document.querySelector(`[data-rating="${id}"]`);
      if (ratingTextEl) {
        if (this.rating?.id !== id) {
          ratingTextEl.setAttribute("hidden", "true");
        } else {
          ratingTextEl.removeAttribute("hidden");
        }
      }
    });
  }
}
