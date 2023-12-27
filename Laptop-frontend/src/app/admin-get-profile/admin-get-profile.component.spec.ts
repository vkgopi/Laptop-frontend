import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGetProfileComponent } from './admin-get-profile.component';

describe('AdminGetProfileComponent', () => {
  let component: AdminGetProfileComponent;
  let fixture: ComponentFixture<AdminGetProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminGetProfileComponent]
    });
    fixture = TestBed.createComponent(AdminGetProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
