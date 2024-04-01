import { TestBed } from '@angular/core/testing';

import { AddIngredientiPopupService } from './add-ingredienti-popup.service';

describe('AddIngredientiPopupService', () => {
  let service: AddIngredientiPopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddIngredientiPopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
