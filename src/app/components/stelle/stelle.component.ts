import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.ratingForm = this.formBuilder.group({
      rating: [null]
    });
    this.ratingForm.get('rating')?.valueChanges.subscribe(value => {
      this.selectedRating = value;
    });
  }
}
