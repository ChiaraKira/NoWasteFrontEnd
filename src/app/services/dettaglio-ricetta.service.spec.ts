import { TestBed } from '@angular/core/testing';

import { DettaglioRicettaService } from './dettaglio-ricetta.service';

describe('DettaglioRicettaService', () => {
  let service: DettaglioRicettaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DettaglioRicettaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
