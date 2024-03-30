import { TestBed } from '@angular/core/testing';

import { IngredientiServiceService } from './ingredienti-service.service';

describe('IngredientiServiceService', () => {
  let service: IngredientiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngredientiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
