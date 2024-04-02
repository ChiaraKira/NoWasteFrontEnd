import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RicettaIngredienteFormComponent } from './ricetta-ingrediente-form.component';

describe('RicettaIngredienteFormComponent', () => {
  let component: RicettaIngredienteFormComponent;
  let fixture: ComponentFixture<RicettaIngredienteFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RicettaIngredienteFormComponent]
    });
    fixture = TestBed.createComponent(RicettaIngredienteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
