import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPortataComponent } from './pagina-portata.component';

describe('PaginaPortataComponent', () => {
  let component: PaginaPortataComponent;
  let fixture: ComponentFixture<PaginaPortataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaPortataComponent]
    });
    fixture = TestBed.createComponent(PaginaPortataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
