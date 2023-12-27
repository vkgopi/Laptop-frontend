import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLaptopByIdComponent } from './get-laptop-by-id.component';

describe('GetLaptopByIdComponent', () => {
  let component: GetLaptopByIdComponent;
  let fixture: ComponentFixture<GetLaptopByIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetLaptopByIdComponent]
    });
    fixture = TestBed.createComponent(GetLaptopByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
