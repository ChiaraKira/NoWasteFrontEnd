import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioRicettaComponent } from './dettaglio-ricetta.component';

describe('DettaglioRicettaComponent', () => {
  let component: DettaglioRicettaComponent;
  let fixture: ComponentFixture<DettaglioRicettaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DettaglioRicettaComponent]
    });
    fixture = TestBed.createComponent(DettaglioRicettaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
