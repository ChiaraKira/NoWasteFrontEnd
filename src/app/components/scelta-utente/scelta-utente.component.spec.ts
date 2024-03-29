import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SceltaUtenteComponent } from './scelta-utente.component';

describe('SceltaUtenteComponent', () => {
  let component: SceltaUtenteComponent;
  let fixture: ComponentFixture<SceltaUtenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SceltaUtenteComponent]
    });
    fixture = TestBed.createComponent(SceltaUtenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
