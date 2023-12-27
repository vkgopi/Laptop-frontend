import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLaptopComponent } from './get-laptop.component';

describe('GetLaptopComponent', () => {
  let component: GetLaptopComponent;
  let fixture: ComponentFixture<GetLaptopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetLaptopComponent]
    });
    fixture = TestBed.createComponent(GetLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
