import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglePayComponent } from './google-pay.component';

describe('GooglePayComponent', () => {
  let component: GooglePayComponent;
  let fixture: ComponentFixture<GooglePayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GooglePayComponent]
    });
    fixture = TestBed.createComponent(GooglePayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
