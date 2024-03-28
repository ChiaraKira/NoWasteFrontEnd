import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCommentiComponent } from './lista-commenti.component';

describe('ListaCommentiComponent', () => {
  let component: ListaCommentiComponent;
  let fixture: ComponentFixture<ListaCommentiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaCommentiComponent]
    });
    fixture = TestBed.createComponent(ListaCommentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
