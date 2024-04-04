import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRicettaComponent } from './form-ricetta.component';

describe('FormRicettaComponent', () => {
  let component: FormRicettaComponent;
  let fixture: ComponentFixture<FormRicettaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormRicettaComponent]
    });
    fixture = TestBed.createComponent(FormRicettaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
