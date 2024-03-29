import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RispostaUtenteComponent } from './risposta-utente.component';

describe('RispostaUtenteComponent', () => {
  let component: RispostaUtenteComponent;
  let fixture: ComponentFixture<RispostaUtenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RispostaUtenteComponent]
    });
    fixture = TestBed.createComponent(RispostaUtenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
