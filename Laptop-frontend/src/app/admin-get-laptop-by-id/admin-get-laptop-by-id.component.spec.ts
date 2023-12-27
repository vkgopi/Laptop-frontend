import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGetLaptopByIDComponent } from './admin-get-laptop-by-id.component';

describe('AdminGetLaptopByIDComponent', () => {
  let component: AdminGetLaptopByIDComponent;
  let fixture: ComponentFixture<AdminGetLaptopByIDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminGetLaptopByIDComponent]
    });
    fixture = TestBed.createComponent(AdminGetLaptopByIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
