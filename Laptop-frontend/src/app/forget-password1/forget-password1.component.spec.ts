import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPassword1Component } from './forget-password1.component';

describe('ForgetPassword1Component', () => {
  let component: ForgetPassword1Component;
  let fixture: ComponentFixture<ForgetPassword1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgetPassword1Component]
    });
    fixture = TestBed.createComponent(ForgetPassword1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
