import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetaliDiStagioneComponent } from './vegetali-di-stagione.component';

describe('VegetaliDiStagioneComponent', () => {
  let component: VegetaliDiStagioneComponent;
  let fixture: ComponentFixture<VegetaliDiStagioneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VegetaliDiStagioneComponent]
    });
    fixture = TestBed.createComponent(VegetaliDiStagioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
