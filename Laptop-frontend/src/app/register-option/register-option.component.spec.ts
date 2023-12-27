import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterOptionComponent } from './register-option.component';

describe('RegisterOptionComponent', () => {
  let component: RegisterOptionComponent;
  let fixture: ComponentFixture<RegisterOptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterOptionComponent]
    });
    fixture = TestBed.createComponent(RegisterOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
