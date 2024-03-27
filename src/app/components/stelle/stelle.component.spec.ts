import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StelleComponent } from './stelle.component';

describe('StelleComponent', () => {
  let component: StelleComponent;
  let fixture: ComponentFixture<StelleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StelleComponent]
    });
    fixture = TestBed.createComponent(StelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
