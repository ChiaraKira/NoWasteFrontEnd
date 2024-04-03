import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RicettaIngredienteComponent } from './ricetta-ingrediente.component';

describe('RicettaIngredienteComponent', () => {
  let component: RicettaIngredienteComponent;
  let fixture: ComponentFixture<RicettaIngredienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RicettaIngredienteComponent]
    });
    fixture = TestBed.createComponent(RicettaIngredienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
