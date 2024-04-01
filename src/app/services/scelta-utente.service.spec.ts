import { TestBed } from '@angular/core/testing';

import { SceltaUtenteService } from './scelta-utente.service';

describe('SceltaUtenteService', () => {
  let service: SceltaUtenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SceltaUtenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
