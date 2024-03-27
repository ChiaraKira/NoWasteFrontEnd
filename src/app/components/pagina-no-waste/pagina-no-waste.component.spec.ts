import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNoWasteComponent } from './pagina-no-waste.component';

describe('PaginaNoWasteComponent', () => {
  let component: PaginaNoWasteComponent;
  let fixture: ComponentFixture<PaginaNoWasteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaNoWasteComponent]
    });
    fixture = TestBed.createComponent(PaginaNoWasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
